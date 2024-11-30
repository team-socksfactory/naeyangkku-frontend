export const randomPosition = (containerWidth: number, containerHeight: number) => {
  // 부모 요소의 크기를 기반으로 랜덤 위치 계산
  const x = Math.random() * (containerWidth - 100); // 100은 아이콘의 너비
  const y = Math.random() * (containerHeight - 100); // 100은 아이콘의 높이
  return { x, y };
};
