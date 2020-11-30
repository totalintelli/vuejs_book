// 모듈
// 단일 객체이므로 import할 때 import { calc } from ...와 같이 구조분해 할당(destructuring assignment)를 사용하지 않고
// import calc from ...와 같이 단일 객체로 가져올 수 있습니다.
import calc from "./utils/utility3";

console.log(calc.add(4, 5));
console.log(calc.multiply(4, 5));
