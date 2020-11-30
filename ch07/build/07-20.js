"use strict";

var _utility = require("./utils/utility3");

var _utility2 = _interopRequireDefault(_utility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_utility2.default.add(4, 5)); // 모듈
// 단일 객체이므로 import할 때 import { calc } from ...와 같이 구조분해 할당(destructuring assignment)를 사용하지 않고
// import calc from ...와 같이 단일 객체로 가져올 수 있습니다.

console.log(_utility2.default.multiply(4, 5));