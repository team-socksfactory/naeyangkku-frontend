export const QUERY_KEYS = Object.freeze({
  letter: {
    getLetter: (ownerId: number) => [`/letter/list/${ownerId}`, ownerId],
    postLetter: "/write"
  },
});
