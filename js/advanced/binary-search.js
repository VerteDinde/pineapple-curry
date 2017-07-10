// implement a binary search

//a binary search takes two args - list and item

const binarySearch = (arr, value) => {
  let min = 0;
  let max = arr.length - 1;
  let i;
  let turns = 0;

  while (min <= max) {
    guess = Math.floor((min + max) / 2);
    turns++;

    if (arr[i] === value) {
      println(turns);
      return i;
    } else if (arr[i] < value) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
    return -1;
  }
}