let msg = "GLOBAL";
function outer(a) {
  let msg = "OUTER";
  console.log(msg);
  if (true) {
    // 트랜스파일한 코드에서와 같이 변수명을 _msg로 변경하여 이름 충돌을 피하도록 한 것을 볼 수 있습니다.
    // 이것은 let으로 선언한 변수가 이전 버전의 자바스크립트 코드에서 이름이 충돌하지 않도록 변수명을 의도적으로 변경한 것입니다.
    let msg = "BLOCK";
    console.log(msg);
  }
}
