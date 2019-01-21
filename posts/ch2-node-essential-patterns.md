---
layout: post
title:  "Chapter 01. Node.js 필수 패턴"
date:   2019-01-21 00:00:28 +0900
categories: node, nodejs, nodejs-design-pattern, design-pattern
---
# 01. Node.js Essential Patterns
## Callback patterns
#### CPS(Continuous-Passing Style, 연속전달방식)
* 단순히 결과를 호출자에게 직접 반환하는 대신, 다른 함수로 전달
* [Closures](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Closures)
  - 클로저를 사용하여 private method 구현 가능 -> 실습해보기 

#### 동기 vs 비동기
* 부수효과(side effetc)를 발생하는 함수
  - 특정 조건에서 동기적으로 전달하고, 특정 조건에서 비동기적으로 동작하는 함수
  - node project 리더인 Isaac Z. Schlueter는 예측할 수 없는 함수를 **Zalgo를 풀어놓는다**라고 비유
  - [Zalgo](https://namu.wiki/w/%ED%81%AC%EB%A6%AC%ED%94%BC%ED%8C%8C%EC%8A%A4%ED%83%80) : 세계의 광기, 죽음, 파괴를 일으키는 것으로 믿어지는 불길한 존재에 대한 인터넷 상의 전
* 동기 API 주의점
  - 동기 API는 이벤트 루프 블록, 동시 요청을 보류한다. -> 성능 저하의 대상
  - 큰 파일을 읽는 경우, 계속 블로킹되어 있다.
  - 어플리케이션이 동시 요청을 처리하는데 영향을 주지 않는 경우만 블로킹 API 사용
* Deferred Execution (지연 실행)
  - process.nextTick() : 대기중인 I/O 이벤트 대기열의 앞으로 밀어 넣고 즉시 반환
  - setImmediate(): 이미 큐에 있는 I/O 이벤트 들의 뒤에 대기
 
#### 콜백 규칙
* 콜백은 함수에서 맨 마지막 인자로
* 콜백함수에서 에러는 첫번째 인자로
* 오류 전파
  - error를 전파할때 return 문 사용해서 즉시 함수에서 빠져나와 그 다음 줄은 실행되지 않아야 한다
  - 비동기 함수 실행은 이벤트 루프에 의해 각기 다른 스택에서 실행되기 때문에 트리거 함수가 아닌 이벤트 루프에서 끝난다.
  - => 예외가 발생한 스택과 실행 스택이 다르다.

## Module system and pattern
모듈은 복잡한 어플리케이션을 구성하기 위한 블록 역할, exports 표시되지 않은 모든 내부적인 함수와 변수를 비공개로 유지하여 정보를 숨긴다.

#### 노출식 모듈 패턴(revealing module pattern)
javascript는 [네임스페이스](https://ko.wikipedia.org/wiki/%EC%9D%B4%EB%A6%84%EA%B3%B5%EA%B0%84)가 없다.
전역 범위에서 실행되는 프로그램은 내부 어플리케이션과 충돌 발생가능하다.

* 자기 호출 함수를 사용하여 private 범위를 만들고, 공개될 부분만 export
* 이 패턴의 사상은 node.js 모듈 시스템의 기반으로 사용
