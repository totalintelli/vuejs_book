"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _require = require("./utility1"),
    add = _require.add;

// 모듈 단위에서 export 하는 값이 여러 개인 경우를 위해서 { add, var1 }과 같이 import 했습니다만,
// 만일 export하는 값이 단일 값, 단일 객체, 단일 함수, 단일 클래스라면
// default 키워드를 이용해 export한 후 단일 값으로  import할 수 있습니다.


var calc = {
  add: function add(x, y) {
    return x + y;
  },
  multiply: function multiply(x, y) {
    return x * y;
  }
};

// 단일 객체를 export하기 위해 default를 사용했습니다.
exports.default = calc;