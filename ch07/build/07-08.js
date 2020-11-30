"use strict";

// 화살표 함수 (Arrow function)
function Person(name, yearCount) {
  var _this = this;

  console.log("\uB2F9\uC2E0\uC774 \uC785\uB825\uD55C \uC774\uB984\uC740 " + name + "\uC774\uACE0 \uC5F0\uB3C4 \uC218\uB294 " + yearCount + "\uC785\uB2C8\uB2E4.");
  this.name = name;
  this.age = 0;
  console.log("\uB2F9\uC2E0\uC758 \uC774\uB984\uC740 " + this.name + "\uC774\uACE0 \uB098\uC774\uB294 " + this.age + "\uC0B4\uC785\uB2C8\uB2E4.");
  //incrAge 함수는 Person 함수 안에 정의되어 있습니다.
  // 화살표 함수는 함수를 둘러싸고 있는 영역의 this를 화살표 함수 내부에서 this로 그대로 사용합니다.
  var incrAge = function incrAge() {
    _this.age++;
  };
  for (var i = 0; i < yearCount; i++) {
    incrAge();
  }
  console.log("\uB2F9\uC2E0\uC758 \uC774\uB984\uC740 " + this.name + "\uC774\uACE0 \uB098\uC774\uB294 " + this.age + "\uC0B4\uC785\uB2C8\uB2E4.");
}
// Person 함수를 생성자로 이용해서 객체를 생성하면 Person 함수 안에서의 this는 객체 p1을 가리킵니다.
var p1 = new Person("홍길동", 20);
//--this.age는 20이 출력됨.
console.log(p1.name + "님의 나이 : " + p1.age);