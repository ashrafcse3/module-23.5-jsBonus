function sum(i) {
    // console.log(i);
    if (i == 1) {
        return 1;
    }
    return i + sum(i - 1);
}

const result = sum(2);
console.log(result);
