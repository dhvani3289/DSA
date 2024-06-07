let arr = [2, 6, 9, 5, 1, 3, 8];
let temp;

for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr.length; j++) {

        if (arr[j] > arr[j + 1]) {

            temp = arr[j];
            arr[j] = arr[j + 1]
            arr[j + 1] = temp;
        }
    }
}

console.log(arr);