function canCompleteCircuit(gas: number[], cost: number[]): number {
    const n = gas.length;
    let i = 0;
    while (i < n) {
        let sumOfGas = 0;
        let sumOfCost = 0;
        let count = 0;
        while (count < n) {
            const j = (i + count) % n;
            sumOfGas += gas[j];
            sumOfCost += cost[j];
            if (sumOfCost > sumOfGas) {
                break;
            }
            count++;
        }
        if (count === n) {
            return i;
        } else {
            i = i + count + 1;
        }
    }
    return -1;
};