// 화살표 함수 (Arrow function)
function Person(name, yearCount) {
  console.log(`당신이 입력한 이름은 ${name}이고 연도 수는 ${yearCount}입니다.`);
  this.name = name;
  this.age = 0;
  console.log(`당신의 이름은 ${this.name}이고 나이는 ${this.age}살입니다.`);
  //incrAge 함수는 Person 함수 안에 정의되어 있습니다.
  // 화살표 함수는 함수를 둘러싸고 있는 영역의 this를 화살표 함수 내부에서 this로 그대로 사용합니다.
  var incrAge = () => {
    this.age++;
  };
  for (let i = 0; i < yearCount; i++) {
    incrAge();
  }
  console.log(`당신의 이름은 ${this.name}이고 나이는 ${this.age}살입니다.`);
}
// Person 함수를 생성자로 이용해서 객체를 생성하면 Person 함수 안에서의 this는 객체 p1을 가리킵니다.
var p1 = new Person("홍길동", 20);
//--this.age는 20이 출력됨.
console.log(p1.name + "님의 나이 : " + p1.age);
