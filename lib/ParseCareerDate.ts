import { Careers } from "../types/microcmsResponseType.ts";

export function ParseCareerDate(toParseObj: Careers) {
  const jstOffset = 1000 * 60 * 60 * 9;
  const startDate = new Date(toParseObj.affiliationStartedAt);
  startDate.setTime(startDate.getTime() + jstOffset);
  const endDate = toParseObj.affiliationEndedAt
    ? new Date(toParseObj.affiliationEndedAt)
    : undefined;
  endDate?.setTime(endDate.getTime() + jstOffset);
  return {
    ...toParseObj,
    affiliationStartedAt: startDate,
    affiliationEndedAt: endDate,
  };
}
