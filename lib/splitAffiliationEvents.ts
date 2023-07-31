import { TimelineItemType } from "../types/timelineType.ts";
import { ParsedCareers } from "../types/microcmsResponseType.ts";

function splitAffiliationEvents(
  careers: ParsedCareers[],
): TimelineItemType[] {
  const finishedEvents: TimelineItemType[] = [];
  const unfinishedEvents: TimelineItemType[] = [];
  const combinedEvents: TimelineItemType[] = [];
  careers.forEach((career) => {
    career.isAffiliationEnded && career.affiliationEndedAt
      ? (
        finishedEvents.push({
          itemType: "end",
          isUniversity: career.isUniversity,
          isAffiliationEnded: career.isAffiliationEnded,
          affiliationName: career.affiliationName,
          eventDate: career.affiliationEndedAt,
          content: career.content,
          universityInfo: career.universityInfo,
        }),
          finishedEvents.push({
            itemType: "start",
            isUniversity: career.isUniversity,
            isAffiliationEnded: career.isAffiliationEnded,
            affiliationName: career.affiliationName,
            eventDate: career.affiliationStartedAt,
            content: career.content,
            universityInfo: career.universityInfo,
          })
      )
      : (
        unfinishedEvents.push({
          itemType: "ongoing",
          isAffiliationEnded: career.isAffiliationEnded,
          isUniversity: career.isUniversity,
          affiliationName: career.affiliationName,
          eventDate: career.affiliationStartedAt,
          content: career.content,
          universityInfo: career.universityInfo,
        })
      );
  });
  return combinedEvents.concat(finishedEvents, unfinishedEvents);
}

export function sortAffiliationEvents(careers: ParsedCareers[]) {
  const splitedCareers = splitAffiliationEvents(careers);
  return splitedCareers.sort((a, b) =>
    b.eventDate.getTime() - a.eventDate.getTime()
  );
}
