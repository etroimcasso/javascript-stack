const Stack = () => {
    let __array = [];
    let __inputArray = [];
    const arrayIndexLast = () => __array.length - 1;
    const push = (item) => {
        __array.push(item);
        __inputArray = [
            arrayIndexLast(),
            ...__inputArray
        ];
    };
    const pop = () => {
        const reversedArray = __array.reverse();
        const returnValue = reversedArray[0];
        __array = reversedArray.slice(1).reverse();
        return returnValue;
    };
    const pop_back = () => {
        const returnValue = __array[0];
        __array = __array.slice(1);
        return returnValue;
    };
    const front = () => __array[0];
    const back = () => __array[arrayIndexLast()];
    const size = () => __array.length;
    const empty = () => size() <= 0;
    const data = () => __array;
    const clear = () => {
        __array = [];
    };
    return ({
        push,
        pop,
        popBack: pop_back,
        length: size,
        first: front,
        last: back,
        isEmpty: empty,
        data,
        clear,
    });
};
module.exports = Stack