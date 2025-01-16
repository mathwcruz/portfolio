import { differenceInYears, isBefore } from "date-fns";

export function calculateProgrammingExperience(): number {
  const start = new Date("2021-04-26");
  const now = new Date();

  const years = differenceInYears(now, start);

  const nextAnniversary = new Date(
    start.getFullYear() + years,
    start.getMonth(),
    start.getDate()
  );

  return isBefore(now, nextAnniversary) ? years - 1 : years;
}
