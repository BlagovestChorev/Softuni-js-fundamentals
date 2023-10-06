function equalSums(arr) {
    for (let i = 0; i < arr.length; i++) {
      let leftSum = arr.slice(0, i).reduce((acc, current) => acc + current, 0);
      let rightSum = arr.slice(i + 1).reduce((acc, current) => acc + current, 0);
  
      if (leftSum === rightSum) {
        console.log(i);
        return;
      }
    }
  
    console.log("no");
  }
  
  equalSums([1, 2, 3, 3]);