function magicSum(arr, targetSum) {
  let pairs = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === targetSum) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }

  if (pairs.length > 0) {
    pairs.forEach(pair => console.log(pair.join(' ')));
  } else {
    console.log("No pairs found.");
  }
}
magicSum([1, 7, 6, 2, 19, 23],8);