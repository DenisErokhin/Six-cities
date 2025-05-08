import { MAX_PERCENT_STARS_WIDTH, START_COUNT, months } from './const';

export function formatDate (date: string) {
  const dateParsed = new Date(date);

  return `${months[dateParsed.getMonth()]} ${dateParsed.getFullYear()}`;
}

export function getStarsWidth (rating: number) {
  return `${(MAX_PERCENT_STARS_WIDTH * rating) / START_COUNT}%`;
}
