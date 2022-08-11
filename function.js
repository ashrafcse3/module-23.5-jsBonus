function add(num1, num2) {
    console.log(num1, num2);

    // This argument only available inside of the function
    // It's also called 'array like object'
    console.log(arguments);
}

add(23, 92, 90);