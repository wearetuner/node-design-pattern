## es2015 / es6

#### let
* 다른 블록 내에 정의된 변수를 출력하려면 error 발생
* 실수로 다른 범위에 변수 액세스시 버그 발견, 잠재적 부작용을 미리 피할수 있다.

#### const
* 읽기 전용 변수로 동작, 단 다른 언어의 상수와 다르다
* 코드 내 다른곳에서 실수로 할당된 변수를 재할당 하지 않도록 하는데 유용

#### arrow function
* **화살표 함수 내부의 this 값은 부모 블록의 값과 같다**
* **lexical scope(어휘 범위)로 바인드 된다.**

#### class
* 단순히 구문상의 편의를 위한 것
* extends, super 키워드를 사용해서 상속 가능 
* 실제로는 prototype을 통해 속성과 함수를 상속

#### object literal
* 변수 및 함수를 객체의 멤버로 지정하고, 객체를 생성할때 동적인 멤버명을 정의 가능
* setter, getter

#### map, set
#### WeakMap, WeakSet
* WeakMap
  - 요소 전체를 반복 구문으로 탐색할 방법이 없고, 객체만을 키로 가질 수 있다.
  - 키로 사용된 객체에 대한 유일한 참조가 WeakMap 내에만 남아있을 경우 GC 가능
  - 예: 어플리케이션의 생명 주기 내에서 삭제되어야 할 객체와 관련된 메타 데이터 저장시 유용

#### template literal
* `${expression}` 사용 가능, `(역 따옴표)
* 단일 문자열을 여러 행에 걸쳐 쉽게 사용 가능

#### 나머지 기능
* default function parameters - (param = 1)
* rest parameters - (...args)
* spread operator - 배열, [...array]
* destructuring - { attr1, attr2 }
* new.target - 처음 본다
* Proxy
* Reflect
* Symbols - 처음 본다
