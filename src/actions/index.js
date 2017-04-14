export function selectRating (sid, boxValue) {
  return {
    type: 'RATING_SELECTED',
    payload: [sid, boxValue]
  }
}
