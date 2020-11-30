// 컬렉션
// 맵(Map)은 키-값 쌍의 집합체이며, 키는 고유한 값이어야 합니다.
let teams = new Map();
// set() 메서드는 값을 설정하는 메서드입니다.
teams.set("LG", "트윈스");
teams.set("삼성", "라이온스");
teams.set("NC", "다이노스");
teams.set("기아", "타이거스");
teams.set("한화", "이글즈");
teams.set("롯데", "자이언츠");

// has() 메서드는 키의 존재 여부를 확인하는 메서드입니다.
console.log(teams.has("SK")); // false
// get() 메서드는 값을 획득하는 메서드입니다.
console.log(teams.get("LG")); // 트윈스
// 이밖에도 clear(), delete()와 같은 메서드를 사용할 수 있습니다.
