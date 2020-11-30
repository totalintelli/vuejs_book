// 클래스
// 이전 버전의 자바스크립트(ES5, ES5.1)까지는 클래스가 제공되지 않았습니다.
// 그래서 대부분 함수를 이용해 유사 클래스(Pseudo Class)를 만드는 방법을 사용할 수밖에 없었습니다.
// 하지만 ES2015에서는 공식적으로 클래스를 지원합니다.
class Person {
  constructor(name, tel, address) {
    this.name = name;
    this.tel = tel;
    this.address = address;
    if (Person.count) {
      Person.count++;
    } else {
      Person.count = 1;
    }
  }
  static getPersonCount() {
    return Person.count;
  }
  toString() {
    return `name=${this.name}, tel=${this.tel}, address=${this.address}`;
  }
}

var p1 = new Person("이몽룡", "010-222-3335", "경기도");
var p2 = new Person("홍길동", "010-222-3333", "서울");
console.log(p1.toString());
console.log(Person.getPersonCount());

// 다른 프로그래밍 언어의 클래스와 유사하게 정적 메서드(Static Method), 인스턴스 메서드(Instance Method), 생성자(Constructor)를 모두 잘 지원하고 있습니다.
// 또한 ES2015 클래스는 상속도 지원합니다.

// Employee 클래스는 Person 클래스로부터 상속받았습니다.
// 기존 클래스의 기능들을 상속받아 사용하고, getEmpInfo()와 같은 메서드를 추가하여 기능을 확장했습니다.
class Employee extends Person {
  constructor(name, tel, address, empno, dept) {
    super(name, tel, address);
    this.empno = empno;
    this.dept = dept;
  }
  toString() {
    return super.toString() + `, empno=${this.empno}, dept=${this.dept}`;
  }
  getEmpInfo() {
    return `${this.empno} : ${this.name}은 ${this.dept} 부서입니다.`;
  }
}

let e1 = new Employee("이몽룡", "010-222-2121", "서울시", "A12311", "회계팀");
console.log(e1.getEmpInfo());
console.log(e1.toString());
console.log(Person.getPersonCount());
