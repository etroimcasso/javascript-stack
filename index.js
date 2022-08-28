const Stack = () => {
    let __array = [];
    let __inputArray = [];
    const arrayIndexLast = () => __array.length - 1;
    const push = (item) => {
        __array.push(item);
        __inputArray = [
            __array.length - 1,
            ...__inputArray
        ];
    };
    const pop = () => {
        const itemIndex = __inputArray[0];
        const returnValue = __array[itemIndex];
        __array = __array.filter((_, index) => index !== itemIndex);
        __inputArray = __inputArray.slice(1);
        return returnValue;
    };
    const popBack = () => {
        const reverseInput = __inputArray.reverse();
        const itemIndex = reverseInput[0];
        const returnValue = __array[itemIndex];
        __array = __array.filter((_, index) => index !== itemIndex);
        __inputArray = reverseInput.slice(1).reverse().map((item) => item - 1);
        return returnValue;
    };
    const front = () => __array[0];
    const back = () => __array[arrayIndexLast()];
    const size = () => __array.length;
    const empty = () => size() <= 0;
    const data = () => __array;
    const clear = () => {
        __array = [];
        __inputArray = [];
    };
    return ({
        push,
        pop,
        pop_back: popBack,
        popBack,
        // size,
        length: size,
        // front,
        first: front,
        // back,
        last: back,
        // empty,
        isEmpty: empty,
        data,
        clear,
    });
};

module.exports = Stack