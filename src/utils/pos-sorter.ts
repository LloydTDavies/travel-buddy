import { PointOfInterest } from '../data/trips';

export const sortPointsOfInterestByType = (arr: PointOfInterest[]) => {
  return [...arr].sort((a, b) => {
    if (a.type < b.type) {
      return -1;
    }
    if (a.type > b.type) {
      return 1;
    }
    return 0;
  });
};
