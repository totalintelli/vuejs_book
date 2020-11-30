"use strict";

// 가변 파라미터(Rest Operator)는 여러 개의 파라미터 값을 배열로 받을 수 있도록 합니다.
// 전달하는 파라미터의 개수는 가변적으로 적용할 수 있습니다.
// 파라미터 앞 부분이 ...으로 시작하는 favoriteFoods가 가변 파라미터입니다.
function foodReport(name, age) {
  console.log(name + ", " + age);

  for (var _len = arguments.length, favoriteFoods = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    favoriteFoods[_key - 2] = arguments[_key];
  }

  console.log(favoriteFoods);
}

// 호출하는 값은 favoriteFoods에 배열 형태로 전달됩니다.
foodReport("이몽룡", 20, "짜장면", "냉면", "불고기");
foodReport("홍길동", 16, "초밥");