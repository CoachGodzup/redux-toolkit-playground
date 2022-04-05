export const getRandomIntegerBetweenBoundaries = (min: number, max: number) => {
  return min + Math.round((Math.random() * 100) % (max - min));
};
