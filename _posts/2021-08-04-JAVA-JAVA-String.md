---
layout: post
title: "[JAVA] String, StringBuilder, StringBuffer 차이점 "
subtitle: "이게 중요해?"
categories: JAVA
tags: JAVA
comments: true
# header-img: img/review/review-book-organize-thoughts-1.png
---
> [프레임 워크를 위한 JAVA]  
> JAVA 문법에서 String의 특성과   
> StringBuilder, StringBuffer에 대해서 설명합니다.  

# String Constant Pool
Java에서 String은 특별한 취급을 한다.

String 은 C++와 마찬가지로 다음과 같이 연산자 사용이 가능하다

```java
String str = "";
for (int i = 0; i < 10 ; i++) str +='1';

//str = "1111111111"
```

### 문제점

자바는 String 에 대해서 기본적으로 Constant pool을 사용한다. 따라서 다음과 같은 두 변수는 참조로서 같은 값을 메모리를 향하게 된다.

```java
String str1 ="hello";
String str2 ="hello";
```
![/assets/img/post_img/2021-08-04-JAVA-JAVA-String/1.png](/assets/img/post_img/2021-08-04-JAVA-JAVA-String/1.png)

**왜 이런일이 발생 하였는가?**

→ String은 불변성을 가지기 위함과 메모리 효율성을 위해 특수하게 동작한다.

String 객체는 Stack공간에 생성되지만 값은 Heap공간에 Constant pool 이라는 테이블을 만들어 저장하게 된다. 

이때 Constant pool에는 프로그램이 실행되는 동안 작성된 모든 string 값이 저장되므로 Heap공간에는 많은 String 값들을 저장하게 된다. 

**즉 , 메모리 효율성을 위해 만들어진 String을 잘못 사용하면(+-연산자 남발) 오히려 메모리를 더많이 사용하게 된다**

맨 처음으로 돌아가보면 

```java
String str = "";
for (int i = 0; i < 10 ; i++) str +='1';

//str = "1111111111"
```

위와 같은 코드는 Heap 영역에 1, 11, 111, ... 1111111111 이라는 문자열이 모두 저장된 것이다.

### 해결방법
각각 상황에 맞게
- new 연산자 사용
- StringBuffer 사용
- StringBuilder 사용
  
## StringBuffer vs StringBuilder
>String은 불변성을 가지기 때문에 문자열 수정 연산이 빈번하게 발생하면 메모리 부족, 성능저하등 치명적인 영향을 끼친다. 
>따라서 이러한 문제를 해결하기 위해서 가변성을 가지는 문자열 StringBuffer와 StringBulider를 도입했다.

### StringBuffer / StringBuilder

→ 메쏘드를 활용하여 문자열 수정이 가능하다. ex) .append(), delete() ...

```java
StringBuffer sb = new StringBuffer("Hello");
// Memoery : Hello
sb,append(" World");
// Memoery : Hello World
```

즉, String 처럼 문자열 수정시 새로 생성되거나, 삭제되었다가 생성되는 불필요한 연산을 하지않는다.

### 차이점

불변성은 멀티쓰레드 환경에서의 안정성을 보장한다.
Builder와 Buffer는 가변성을 가지지만,
Buffer에서는 동기화를 지원하므로 멀티쓰레드 환경에서의 안정성을 보장하게된다.
그러나 Builder는 멀티쓰레드 환경에서의 안정성을 가지지 못하지만, 성능은 Buffer보다 빠르다.
요약하면 다음과 같다.

  
|          	| String     	| StringBuffer 	| StringBuilder 	|
|----------	|------------	|--------------	|---------------	|
| 저장공간 	| Pool(Heap) 	| Heap         	| Heap          	|
| 특징     	| 불변성     	| 가변성       	| 가변성        	|
| 사용     	| 멀티쓰레드 	| 멀티쓰레드   	| 단일쓰레드    	|
| 성능     	| 빠름       	| 느림         	| 빠름          	|


### 활용

알고리즘 문제풀이 시 터미널창에 출력하는 메쏘드는 실행시간이 오래걸린다.
따라서 답을 호출할 때 출력을 여러번 하는것 보다 String 에 저장하여 한번에 출력하는것이 실행시간에 유리하다.
이때 String 과 연산자+-을 사용하게 되면 위와같은 문제로 메모리에 대한 낭비가 발생하게 되므로 위와 같은 해결 방법을 통해 해결한다.

예제 : [https://velog.io/@16min99/BOJ-줄세우기-java](https://velog.io/@16min99/BOJ-%EC%A4%84%EC%84%B8%EC%9A%B0%EA%B8%B0-java)

![/assets/img/post_img/2021-08-04-JAVA-JAVA-String/2.png](/assets/img/post_img/2021-08-04-JAVA-JAVA-String/2.png)
