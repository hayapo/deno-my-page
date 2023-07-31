import { UniversityInfo, UniversityInfoItems } from "./microcmsResponseType.ts";

export type TimelineItemType = {
  itemType: "start" | "end" | "ongoing";
  isUniversity: boolean;
  isAffiliationEnded: boolean;
  affiliationName: string;
  eventDate: Date;
  content?: string;
  universityInfo?: UniversityInfo<UniversityInfoItems>;
};
