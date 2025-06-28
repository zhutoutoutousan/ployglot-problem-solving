// https://www.codewars.com/kata/550498447451fbbd7600041c/train/typescript
// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
export function comp(a1: number[] | null, a2: number[] | null): boolean {
    // Traverse a1, and check if the element's square is in a2, if no, return false
    if (a1 === null || a2 === null) {
        return false;
    }
    for (let i = 0; i < a1.length; i++) {
        if (!a2.includes(a1[i] ** 2)) {
            return false;
        }
    }
    return true;
}