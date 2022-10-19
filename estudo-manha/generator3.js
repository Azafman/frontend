function* geradora5() {
    yield function() {
        console.log('Vim do y1');
    }
    return function() {
        console.log('Vim do return');
    }
    yield function() {
        console.log('Vim do y2');
    }
}
const g5 = geradora5()
const acao1 = g5.next().value;
const acao2 = g5.next().value;
acao1();
acao2();
// concluo que por ter na declaração (function*), o return impedirá que haja um próximo yield. 