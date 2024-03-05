/**
 * Composes functions by taking a sequence of functions and returning a new function
 * that applies them sequentially to the input value.
 * @param {...function} fns - Functions to compose. Can be any number of functions.
 * @returns {function} - A new function that applies the sequence of functions to the input value.
 * @example
 * // Creating a function that adds 1 to the input and then multiplies by 2
 * const pipe1 = pipe(addOne, mulByTwo);
 * console.log(pipe1(5)); // 12
 *
 * // Creating a function that first multiplies by 2, then adds 1, and then multiplies by 2 again
 * const pipe2 = pipe(mulByTwo, addOne, mulByTwo);
 * console.log(pipe2(5)); // 22
 */
function pipe (...fns) {
    if (fns.length === 0) {
        throw new Error("❌ The \"pipe\" function expects at least one argument! Please 'pass' the correct number of arguments");
    }

    for (const fn of fns) {
        if (typeof fn !== "function") {
            throw new Error("❌ The \"pipe\" function takes only functions as arguments");
        }
    }

    return (input) => {
        return fns.reduce(
            (acc, fn) => fn(acc),
            input
        );
    };
};

module.exports = {
    pipe
};