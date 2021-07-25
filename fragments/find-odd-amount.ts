// XOR each element of the array with the previous element. End result is the number that occurs odd number of times.
function findOddAmount(numbers: Array<number>): number {

    // declare a variable to hold the XOR result of the array
    let result = 0;

    // loop through the array and XOR each element with the previous element
    for(let i = 0, len = numbers.length; i < len; i++) {
        result = result ^ numbers[i];
    }
    return result;
}
