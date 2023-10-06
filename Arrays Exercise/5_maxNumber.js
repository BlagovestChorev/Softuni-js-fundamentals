function maxNumber (arr){
    let topNums = [];
    for(let i = 0; i < arr.length; i++){
        let num = arr[i];
        let isTop = true;

        for(let j = i + 1; j < arr.length; j++){
            let rightNum = arr[j];

            if(rightNum >= num){
                isTop = false;
                break;
            }
        }
        if(isTop){
            topNums.push(num);
        }
    }
    console.log(topNums.join(' '));

}
maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);