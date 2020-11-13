// @는 src 디렉터리를 의미합니다. build/Webpack.base.
// config.js 에 정의된 정보를 사용한 것입니다.
import sum from "@/sum.js";

describe("sum", () => {
  it("add 2+3 equals 5", () => {
    expect(sum(2, 3)).to.equal(5);
  });
});
