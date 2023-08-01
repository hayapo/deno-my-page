import { Handlers, PageProps } from "$fresh/server.ts";
import { ProfileType, TimelineItemType } from "../types/index.ts";
import { CustomHead as Head } from "../components/index.ts";
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
      <Head title="Career" description="hayapo's career page" />
      <CareerTimeline items={timelineItems} />
    </>
  );
}

function CareerTimeline(props: { items: TimelineItemType[] }) {
  const items = props.items;
  return (
    <div class="p-10 font-sans">
      <ul class="relative border-l border-gray-400">
        {items.map((item, index) => (
          <CareerTimelineItem
            item={item}
            index={index}
          />
        ))}
      </ul>
    </div>
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
      class="items-center mb-10 ml-4"
    >
      <div class="absolute w-4 h-4 bg-gray-200 rounded-full mt-1.5 -left-[0.510rem] border border-white">
      </div>
      <time
        dateTime={`${item.eventDate.getFullYear()}-${
          item.eventDate.getMonth() + 1
        }`}
        class="mb-1 text-xl"
      >
        {eventDateString + ongoingDateString}
      </time>
      <h3 class="text-2xl font-semibold">
        {item.affiliationName + " " + eventStatusString}
      </h3>
      {item.universityInfo && (
        <p class="text-gray-500 text-lg">
          {item.universityInfo[0]?.facultyOrDepartment + " " +
            item.universityInfo[0]?.major}
        </p>
      )}
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
    default:
      return "";
  }
}
