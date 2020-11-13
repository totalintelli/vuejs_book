import Vue from "vue";
import HelloWorld from "@/components/HelloWorld";

// describe 함수는 관련된 테스트들을 묶어 테스트 블록을 테스트 스위트(Test suite)
// 형태로 생성합니다.
describe("HelloWorld.vue", () => {
  // it 함수는 test 함수의 별칭(alias)이며,
  // test 함수는 실질적인 테스트 기능을 수행하는 함수입니다.
  // 이 내부에는 테스트 이름과 기대하는 테스트 값을 포함합니다.
  it("should render correct contents", () => {
    // Hello 컴포넌트를 생성한다.
    const Constructor = Vue.extend(HelloWorld);
    // $mount() 함수로 Hello 컴포넌트를 마운트시킨다.
    const vm = new Constructor().$mount();
    // vm.$el.querySelector(".hello h1").textContent
    // 컴포넌트 인스턴스의 요소($el) 중 class가 hello인 요소의 자식 중 h1 요소의 텍스트 콘텐트 값을 알아내고
    // to.equal("Welcome to Your Vue.js App");
    // 그 값이 'Welcome to Your Vue.js App' 문자열과 일치하는지 비교합니다.
    expect(vm.$el.querySelector(".hello h1").textContent).to.equal(
      "Welcome to Your Vue.js App"
    );
  });
});
