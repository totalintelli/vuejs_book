"use strict";

// Promise
// 이전까지 AJAX 처리를 위한 비동기 처리를 수행할 때 비동기 처리가 완료되면 콜백 함수가 호출되도록 작성하는 것이 일반적인 형태였습니다.
// 하지만 이 방법은 비동기로 처리할 작업이 반복되면 콜백 함수들이 중첩되어 예외 처리가 힘듭니다.
// ES2015에서는 Promise 객체를 지원해 비동기 처리를 좀 더 깔끔하게 수행할 수 있습니다.
// 최근 서버와 통신하기 위한 여러 가지 라이브러리들은 대부분 Promise 객체를 사용하고 있습니다.
// whatwg-fetch와 같은 것이 대표적인 Promise 객체를 사용하는 라이브러리입니다.
// 이 밖에도 superagent, axios, vue-resource 등이 대부분 Promise 객체를 사용합니다.

// Promise 객체를 생성할 때는 전달하는 함수가 비동기로 실행됩니다.
var p = new Promise(function (resolve, reject) {
  setTimeout(function () {
    var num = Math.round(Math.random() * 20);
    var isValid = num % 2;
    if (isValid) {
      // 첫 번째 인자로 전달된 resolve 함수를 호출하면 Promise 객체의 then 메서드에 등록된 함수가 호출됩니다.
      resolve(num);
    } else {
      // 두 번재 인자로 전달된 reject 함수를 호출하면 Promise 객체의 catch 메서드에 등록된 함수가 호출됩니다.
      reject(num);
    }
  }, 2000);
});

// 이로써 비동기로 실행할 코드와 비동기 처리 결과를 받아 실행하는 코드를 분리할 수 있습니다.
p.then(function (num) {
  console.log("홀수 : " + num);
}).catch(function (num) {
  console.log("짝수 : " + +num);
});

console.log("20까지의 난수 중 홀수/짝수?");
console.log("결과는 2초 후에 나옵니다.");