import { Careers } from "../types/microcmsResponseType.ts";

export function parseCareerDate(toParseObj: Careers) {
  const startDate = new Date(toParseObj.affiliationStartedAt);
  const endDate = toParseObj.affiliationEndedAt
    ? new Date(toParseObj.affiliationEndedAt)
    : undefined;
  return {
    ...toParseObj,
    affiliationStartedAt: startDate,
    affiliationEndedAt: endDate,
  };
}
