let arr = [5, 4, -7, -6, 1, 3, 0];
let sum = 0;

for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr.length; j++) {

        if (arr[j] + arr[j + 1] > sum) {

            sum = arr[j] + arr[j + 1];
        }
    }
}
console.log(sum);
