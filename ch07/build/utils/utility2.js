"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 변수나 함수를 export하기 위해서 export 키워드를 앞에 붙여주면 됩니다.
// 다른 방법으로는 일단 함수나 변수, 클래스를 작성한 다음 한 번에 export하는 방법이 있습니다.
var var1 = 1000;
function add(a, b) {
  return a + b;
}

exports.var1 = var1;
exports.add = add;