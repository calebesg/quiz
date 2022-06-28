export function randomize(arr: any[]): any[] {
  return arr
    .map((item) => ({ item, random: Math.random() }))
    .sort((current, next) => current.random - next.random)
    .map(({ item }) => item);
}
