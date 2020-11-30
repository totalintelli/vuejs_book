// 새로운 객체 리터럴
let p1 = {
  name: "아이패드",
  price: 200000,
  quantity: 2,
  // order 메서드는 기존 방식으로 작성한 것이고, discount 메서드는 ES2015가 제공하는 방식으로 작성한 것입니다.
  order: function () {
    if (!this.amount) {
      this.amount = this.quantity * this.price;
    }
    console.log("주문금액 : " + this.amount);
  },
  //function 키워드를 사용하지 않고 바로 {} 구현부가 따라옵니다.
  // babel src -d build 명령어로 트랜스파일한 코드(build/07-10.js)를 살펴보면 discount 함수가 다음과 같은 형태로 변환된 것을 알 수 있습니다.
  // discount: function discount(rate) {
  //            if (rate > 0 && rate < 0.8) {
  //           this.amount = (1 - rate) * this.price * this.quantity;
  //       }
  //       console.log(100 * rate + "% 할인된 금액으로 구매합니다.");
  //   }
  discount(rate) {
    if (rate > 0 && rate < 0.8) {
      this.amount = (1 - rate) * this.price * this.quantity;
    }
    console.log(100 * rate + "% 할인된 금액으로 구매합니다.");
  },
};
p1.discount(0.2);
p1.order();
