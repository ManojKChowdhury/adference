function sumSmallestNumbers(numbers: Array<number>): number {
    //create a copy of the original array
    const sortedNumbers = numbers.slice();

    //sort the array in ascending order
    sortedNumbers.sort((a: number, b: number) => {
        return a - b;
    })

    //calculate and return the sum of first and second numbers in the sorted array
    return sortedNumbers[0] + sortedNumbers[1];
}

console.log(sumSmallestNumbers([1, 2, 3, 4]));
console.log(sumSmallestNumbers([6, 7, 56, 2, 9, 34, 3]));
console.log(sumSmallestNumbers([4, 4]));
console.log(sumSmallestNumbers([5, 38, 15, 1, 1, -19, 9]));
console.log(sumSmallestNumbers([1, 1, 1, 1]));
