function mergeArrays(arr1, arr2){
    let newArr = [];

    for(let i = 0; i < arr1.length; i++){
        let element1 = arr1[i];
        let element2 = arr2[i];

        if(i % 2 == 0){
            let sum = Number(element1) + Number(element2);
            newArr.push(sum);
        } else {
            let concatenation = element1 + element2;
            newArr.push(concatenation);
        }
    }
    console.log(newArr.join(" - "));
}
mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);