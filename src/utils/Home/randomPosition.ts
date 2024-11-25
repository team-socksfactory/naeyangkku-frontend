export const randomPosition = (containerX: number, containery: number) => {
  const x = Math.random() * (containerX - 100);
  const y = Math.random() * (containery - 100);
  return { x, y };
};
