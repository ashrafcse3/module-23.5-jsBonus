function recurse(x) {
    console.log(x);
    if (x == 1) {
        return 1;
    }
    return recurse(x - 1);
}

recurse(10);
// let result = recurse(10);
// console.log(result);