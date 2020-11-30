"use strict";

// 새로운 객체 리터럴
// ES2015에서는 객체의 속성 표기법이 개선되었습니다.
// 객체의 속성을 작성할 때 변수명과 동일하다면 생략할 수 있습니다.
var name = "홍길동";
var age = 20;
var email = "gdhong@test.com";

// 객체를 생성할 때 변수 값을 객체의 속성으로 지정하는 경우가 있습니다.
// 이런 경우에 아래와 같은 코드를 주로 작성했습니다.
//var obj = {name:name,age:age,email:email};
// ES2015에서는 속성명과 변수명이 일치할 때 아래 코드와 같이 생략할 수 있습니다.
// 트랜스파일된 결과물인 build/07-09.js를 열어보면 13행의 코드가 주석처리된 10행과 같은 형태로 바뀐 것을 확인할 수 있습니다.
var obj = { name: name, age: age, email: email };
console.log(obj);