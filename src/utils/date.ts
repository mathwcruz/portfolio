import { differenceInYears } from "date-fns";

export function calculateProgrammingExperience(): number {
  return differenceInYears(new Date(), new Date("2021-04-26"));
}
