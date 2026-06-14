function Counter() {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}

const inc = Counter()
console.log(inc());
console.log(inc());

