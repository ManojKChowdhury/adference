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
