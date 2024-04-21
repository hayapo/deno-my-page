import { CareerTimelineItemType } from "../types/index.ts";

export function sortCareerTimeline(careers: CareerTimelineItemType[]) {
  return careers.sort((a, b) =>
    b.startedAt.getTime() - a.startedAt.getTime()
  );
}
