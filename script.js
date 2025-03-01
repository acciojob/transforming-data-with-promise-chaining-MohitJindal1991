const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    const input = document.querySelector('#ip');
    const output = document.querySelector("#output");

    // Convert input value to a number
    const initialValue = parseFloat(input.value);

    // Initial Promise (Resolves after 2 seconds)
    new Promise((resolve) => {
        setTimeout(() => {
            output.innerHTML = `Result: ${initialValue}`;
            resolve(initialValue);
        }, 2000);
    })
    .then((num) => {
        // Multiply by 2 (Resolves after 2 seconds)
        return new Promise((resolve) => {
            setTimeout(() => {
                num = num * 2;
                output.innerHTML = `Result: ${num}`;
                resolve(num);
            }, 2000);
        });
    })
    .then((num) => {
        // Subtract 3 (Resolves after 1 second)
        return new Promise((resolve) => {
            setTimeout(() => {
                num = num - 3;
                output.innerHTML = `Result: ${num}`;
                resolve(num);
            }, 1000);
        });
    })
    .then((num) => {
        // Divide by 2 (Resolves after 1 second)
        return new Promise((resolve) => {
            setTimeout(() => {
                num = num / 2;
                output.innerHTML = `Result: ${num}`;
                resolve(num);
            }, 1000);
        });
    })
    .then((num) => {
        // Add 10 (Final transformation, resolves after 1 second)
        return new Promise((resolve) => {
            setTimeout(() => {
                num = num + 10;
                output.innerHTML = `Final Result: ${num}`;
                resolve(num);
            }, 1000);
        });
    });
});
