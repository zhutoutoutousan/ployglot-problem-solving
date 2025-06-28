export function arrayDiff(a: number[], b: number[]): number[] {
    // Return the elements in a that are not in b
    return a.filter(x => !b.includes(x));
}
  