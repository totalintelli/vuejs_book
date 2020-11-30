"use strict";

// 구조분해 할당과 기본 파라미터를 함께 사용했습니다.
function addContact(_ref) {
  var name = _ref.name,
      phone = _ref.phone,
      _ref$email = _ref.email,
      email = _ref$email === undefined ? "이메일 없음" : _ref$email,
      _ref$age = _ref.age,
      age = _ref$age === undefined ? 0 : _ref$age;

  console.log("이름 : " + name);
  console.log("전번 : " + phone);
  console.log("이메일 : " + email);
  console.log("나이 : " + age);
}

// addContact 함수를 호출할 때 자바스크립트 객체를 파라미터로 전달하고 있습니다.
// 전달된 객체는 구조분해 할당을 수행합니다.
// 객체를 파라미터로 전달하는 경우 파라미터의 전달 순서는 실행 결과에 영향을 주지 않습니다.
addContact({
  name: "이몽룡",
  phone: "010-3434-8989"
});