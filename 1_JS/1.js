const m = [34, 2, 23, 76, 1, 89];

console.log("Режим:");
console.log("1. Вверх");
console.log("2. Вниз");

const v = prompt("Цифра (1 или 2):");

let _, __, ___, ____;

switch (v) {
  case '1':
    _ = m.slice();
    __ = _.sort((x, _x) => x - _x); 
    break;
  case '2':
    _ = m.slice();
    __ = _.sort((x, _x) => _x - x);
    break;
  default:
    console.log("тогда я сам решу наверно.. сам решуУу");
    _ = m.slice();
    __ = _.sort((x, _x) => x - _x); 
}


const r = (ст) => console.log("Готово:", ст); 


r(__);
