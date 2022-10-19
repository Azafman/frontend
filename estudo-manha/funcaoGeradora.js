function* geradora1() {
    yield '1°gen'
    yield '2°gen'
    yield '3°gen'
    yield '4°gen'
}
const p1 = geradora1();
console.log(p1);
// console.log(p1.next().value);
// console.log(p1.next().value);
// console.log(p1.next().value);
// console.log(p1.next().value);
// console.log(p1.next().value);
console.log('---')
for(let valor of p1) {
    console.log(valor)
}