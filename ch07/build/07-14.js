"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 클래스
// 이전 버전의 자바스크립트(ES5, ES5.1)까지는 클래스가 제공되지 않았습니다.
// 그래서 대부분 함수를 이용해 유사 클래스(Pseudo Class)를 만드는 방법을 사용할 수밖에 없었습니다.
// 하지만 ES2015에서는 공식적으로 클래스를 지원합니다.
var Person = function () {
  function Person(name, tel, address) {
    _classCallCheck(this, Person);

    this.name = name;
    this.tel = tel;
    this.address = address;
    if (Person.count) {
      Person.count++;
    } else {
      Person.count = 1;
    }
  }

  _createClass(Person, [{
    key: "toString",
    value: function toString() {
      return "name=" + this.name + ", tel=" + this.tel + ", address=" + this.address;
    }
  }], [{
    key: "getPersonCount",
    value: function getPersonCount() {
      return Person.count;
    }
  }]);

  return Person;
}();

var p1 = new Person("이몽룡", "010-222-3335", "경기도");
var p2 = new Person("홍길동", "010-222-3333", "서울");
console.log(p1.toString());
console.log(Person.getPersonCount());

// 다른 프로그래밍 언어의 클래스와 유사하게 정적 메서드(Static Method), 인스턴스 메서드(Instance Method), 생성자(Constructor)를 모두 잘 지원하고 있습니다.
// 또한 ES2015 클래스는 상속도 지원합니다.

// Employee 클래스는 Person 클래스로부터 상속받았습니다.
// 기존 클래스의 기능들을 상속받아 사용하고, getEmpInfo()와 같은 메서드를 추가하여 기능을 확장했습니다.

var Employee = function (_Person) {
  _inherits(Employee, _Person);

  function Employee(name, tel, address, empno, dept) {
    _classCallCheck(this, Employee);

    var _this = _possibleConstructorReturn(this, (Employee.__proto__ || Object.getPrototypeOf(Employee)).call(this, name, tel, address));

    _this.empno = empno;
    _this.dept = dept;
    return _this;
  }

  _createClass(Employee, [{
    key: "toString",
    value: function toString() {
      return _get(Employee.prototype.__proto__ || Object.getPrototypeOf(Employee.prototype), "toString", this).call(this) + (", empno=" + this.empno + ", dept=" + this.dept);
    }
  }, {
    key: "getEmpInfo",
    value: function getEmpInfo() {
      return this.empno + " : " + this.name + "\uC740 " + this.dept + " \uBD80\uC11C\uC785\uB2C8\uB2E4.";
    }
  }]);

  return Employee;
}(Person);

var e1 = new Employee("이몽룡", "010-222-2121", "서울시", "A12311", "회계팀");
console.log(e1.getEmpInfo());
console.log(e1.toString());
console.log(Person.getPersonCount());