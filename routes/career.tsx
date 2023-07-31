import { Handlers, PageProps } from "$fresh/server.ts";
import { ProfileType, TimelineItemType } from "../types/index.ts";
import {
  microcmsClient,
  parseCareerDate,
  sortAffiliationEvents,
} from "../lib/index.ts";

const ENDPOINT = "profile_jp";
const cache: Record<string, ProfileType> = {};

export const handler: Handlers<ProfileType | null> = {
  async GET(_, ctx) {
    if (cache[ENDPOINT]) {
      console.log("returned from cache");
      return ctx.render(cache[ENDPOINT]);
    }

    const profileData = await microcmsClient.get({
      endpoint: ENDPOINT,
      queries: { limit: 99 },
    });
    cache[ENDPOINT] = profileData;
    return ctx.render(profileData);
  },
};

export default function Career({ data }: PageProps<ProfileType | null>) {
  if (!data || data.careers.length === 0) return <h1>Bio data not found</h1>;
  const parsedCareers = data.careers.map((career) => parseCareerDate(career));
  const timelineItems = sortAffiliationEvents(parsedCareers);

  return (
    <>
      <div class="max-w-screen-lg mx-auto flex flex-col items-center justify-center font-mono text-center">
        <div class="text-4xl">Career Page (In Development)</div>
        <ul class="relative border-l border-gray-400">
          {timelineItems.map((item, index) => (
            <CareerTimelineItem
              item={item}
              index={index}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

function CareerTimelineItem(props: { item: TimelineItemType; index: number }) {
  const item = props.item;
  const index = props.index;

  const affiliationType = item.isUniversity ? "university" : "company";
  const ongoingDateString = item.isAffiliationEnded ? "" : "-";
  const eventDateString = CreateEventDateString(item.eventDate);
  const eventStatusString = CreateStatusString(
    item.itemType,
    item.isUniversity,
  );

  return (
    <li
      key={`${affiliationType}-${index}`}
      class="flex gap-3 items-center"
    >
      <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white">
      </div>
      <p className="flex gap-3">
        <span>{eventDateString + ongoingDateString}</span>
        <span>{item.affiliationName}</span>
        <span>{eventStatusString}</span>
      </p>
    </li>
  );
}

function CreateEventDateString(eventDate: Date) {
  const year = eventDate.getFullYear();
  const month = eventDate.getMonth() + 1;
  const day = eventDate.getDate();
  return `${year}/${month}/${day}`;
}

function CreateStatusString(
  status: TimelineItemType["itemType"],
  isUniversity: boolean,
) {
  switch (status) {
    case "start":
      return isUniversity ? "入学" : "入社";
    case "end":
      return isUniversity ? "卒業" : "退社";
  }
}
