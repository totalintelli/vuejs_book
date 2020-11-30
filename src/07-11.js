// 템플릿 리터럴
// 템플릿 리터럴(Template Literal)은 역따옴표(Backquote:`)로 묶어진 문자열에서
// 템플릿 대입문(${})을 이용해 동적으로 문자열을 끼워넣어 구성할 수 있는 방법을 제공합니다.
// 템플릿 대입문에는 수식 구문, 변수, 함수 호출 구문 등 대부분의 표현식을 사용할 수 있습니다.
// 또한 템플릿 문자열은 개행 문자를 포함하여 여러 줄로 작성할 수 있습니다.
// 트랜스파일된 코드를 살펴보면 다음과 같이 문자열을 이어붙이는 코드로 변경된 것을 볼 수 있습니다.
// 한글은 유니코드 이스케이프 형식(Unicode escape format)으로 변환되었습니다.
var d1 = new Date();
var name = "홍길동";
var r1 = `${name} 님에게 ${d1.toDateString()}에 연락했다.`;
console.log(r1);

var product = "갤럭시 S7";
var price = 199000;
var str = `${product}의 가격은 ${price}원 입니다.`;
console.log(str);
