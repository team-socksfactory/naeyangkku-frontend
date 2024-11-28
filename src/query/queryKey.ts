export const QUERY_KEYS = Object.freeze({
  user: '/user',

  letter: {
    getLetter: (ownerId: number) => [`/letter/list/${ownerId}`, ownerId],
    postLetter: () => [`/letter/send`],
    getSharedLetter: (ownerNickname: string) => [`/share/${ownerNickname}`, ownerNickname],
  },
});
