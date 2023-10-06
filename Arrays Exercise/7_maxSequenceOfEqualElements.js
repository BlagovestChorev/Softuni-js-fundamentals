function solve(arr) {
    let currentSequence = [arr[0]];
    let longestSequence = [arr[0]];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] === arr[i - 1]) {
        currentSequence.push(arr[i]);
      } else {
        currentSequence = [arr[i]];
      }
  
      if (currentSequence.length > longestSequence.length) {
        longestSequence = currentSequence;
      }
    }
  
    console.log(longestSequence.join(' '));
  }
  
  solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);