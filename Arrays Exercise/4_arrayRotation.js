function arrayRotation (arr, rotationCount){
    for(let i = 1; i <= rotationCount; i++){
        let element = arr.shift();
        arr.push(element);
    }
    console.log(arr.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);