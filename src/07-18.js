// 이제 export한 요소들을 import해보겠습니다.
// 파일 단위로 모듈을 생성하므로 파일의 경로를 지정하면 됩니다.
// .js 확장자는 생략할 수 있습니다.
import { add, var1 as v } from "./utils/utility1";

console.log(add(4, 5));
console.log(v);
