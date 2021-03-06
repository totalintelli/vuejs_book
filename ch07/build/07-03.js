"use strict";

// addContact 함수의 home, address, email 파라미터는 값을 전달하지 않을 경우 주어진 기본값이 할당됩니다.
function addContact(name, mobile) {
  var home = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "없음";
  var address = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "없음";
  var email = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "없음";

  var str = "name=" + name + ", mobile=" + mobile + ", home=" + home + ", address=" + address + ", email=" + email;
  console.log(str);
}
// 이름(name)과, 휴대폰 번호(mobile)만을 전달했을 때 나머지는 모두 '없음'이라는 기본값이 할당됩니다.
addContact("홍길동", "010-222-3331");
addContact("이몽룡", "010-222-3331", "02-3422-9900", "서울시");