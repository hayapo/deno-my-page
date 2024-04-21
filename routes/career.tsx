import { CareerTimelineItemType } from "../types/index.ts";
import { CustomHead as Head } from "../components/index.ts";
import { careerTimelineJa, sortCareerTimeline } from "../lib/index.ts";

const ENDPOINT = "profile_jp";

export default function Career() {
  return (
    <>
      <Head title="Career" description="hayapo's career page" />
      <CareerTimeline items={careerTimelineJa} />
    </>
  );
}

function CareerTimeline(props: { items: CareerTimelineItemType[] }) {
  const careers = sortCareerTimeline(props.items);
  return (
    <div class="p-10 font-sans">
      <ul class="relative border-l border-gray-400">
        {careers.map((item) => (
          <CareerTimelineItem item={item} />
        ))}
      </ul>
    </div>
  );
}

function CareerTimelineItem(props: { item: CareerTimelineItemType }) {
  return (
    <li
      key={props.item.id}
      class="items-center mb-10 ml-5"
    >
      <div class="absolute w-4 h-4 bg-gray-200 rounded-full mt-1.5 -left-[0.53rem] border border-gray-100 dark:border-gray-600">
      </div>
      <div class="flex flex-col gap-2">
        <CareerDate career={props.item} />
        <h3 class="text-3xl font-semibold">
          {props.item.affiliationName}
        </h3>
        <p class="text-gray-500 dark:text-gray-300 text-xl">
          {props.item.affiliationDetail}
        </p>
      </div>
    </li>
  );
}

function CareerDate(props: {career: CareerTimelineItemType}) {
  return (
    props.career.endedAt ? (
      <span class="mb-1 text-2xl">{CreateCareerDateString(props.career.startedAt)} - {CreateCareerDateString(props.career.endedAt)}</span>
    ) : (
      <span class="mb-1 text-2xl">{CreateCareerDateString(props.career.startedAt)} -</span>
    )
  )
}

function CreateCareerDateString(eventDate: Date) {
  const year = eventDate.getFullYear();
  const month = eventDate.getMonth() + 1;
  const day = eventDate.getDate();
  return `${year}/${month}/${day}`;
}