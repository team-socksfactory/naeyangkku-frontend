export const QUERY_KEYS = Object.freeze({
  letter: {
    getLetter: (ownerId: string) => [`/letter/list/${ownerId}`, ownerId],
    getSharedLetter: (ownerNickname: string) => [`/share/${ownerNickname}`, ownerNickname],
  },
});
