let arr = [12, 38, 46, 66, 87, 90];
let find = 7;
let first = 0;
let last = arr.length - 1;

function binary(arr, first, last, find) {

    if (first <= last) {

        let mid = Math.floor((first + last) / 2);

        if (arr[mid] == find)
            return `${arr[mid]} is at index ${mid}`;

        if (arr[mid] > find)
            return binary(arr, first, mid - 1, find);

        else
            return binary(arr, mid + 1, last, find);
    }
}

let result = binary(arr, first, last, find);
console.log(result);

