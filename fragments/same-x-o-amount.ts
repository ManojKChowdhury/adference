// get the number of X's & O's in the string using regex and compare them.
function sameXOAmount(str: string): boolean {
    return str.match(/x/gi)?.length === str.match(/o/gi)?.length;
}
