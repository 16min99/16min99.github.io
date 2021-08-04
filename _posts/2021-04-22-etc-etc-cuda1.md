---
layout: post
title: "cuda 프로그래밍 환경설정 [windows]"
subtitle: "cuda"
categories: etc
tags: etc
comments: true  
---
>병렬 프로그래밍을 위한 cuda 설치 및 환경설정 포스팅

- CUDA설치

[https://developer.nvidia.com/cuda-downloads](https://developer.nvidia.com/cuda-downloads)

OS버전에 맞게 선택후 설치

![/assets/img/post_img/2021-04-22-etc-etc-cuda1/Untitled.png](/assets/img/post_img/2021-04-22-etc-etc-cuda1/Untitled.png)

⇒ 설치시 빠른설치(권장) 선택후 디폴트 값으로 진행

- 비쥬얼 스튜디오 CUDA 프로젝트 만들기

새 프로젝트 >> 콘솔 앱

![/assets/img/post_img/2021-04-22-etc-etc-cuda1/Untitled%201.png](/assets/img/post_img/2021-04-22-etc-etc-cuda1/Untitled%201.png)

스튜디오 상단 디버그 x86에서 x64로 변경

![/assets/img/post_img/2021-04-22-etc-etc-cuda1/Untitled%202.png](/assets/img/post_img/2021-04-22-etc-etc-cuda1/Untitled%202.png)

프로젝트 우클릭 >> 빌드 종속성 >> 사용자 지정 빌드

![/assets/img/post_img/2021-04-22-etc-etc-cuda1/Untitled%203.png](/assets/img/post_img/2021-04-22-etc-etc-cuda1/Untitled%203.png)

쿠다 체크

![/assets/img/post_img/2021-04-22-etc-etc-cuda1/Untitled%204.png](/assets/img/post_img/2021-04-22-etc-etc-cuda1/Untitled%204.png)

프로젝트 우클릭 >> 속성

![/assets/img/post_img/2021-04-22-etc-etc-cuda1/Untitled%205.png](/assets/img/post_img/2021-04-22-etc-etc-cuda1/Untitled%205.png)

링커 >> 입력 >> 추가 종속성 >> cudart_static.lib; 추가

![/assets/img/post_img/2021-04-22-etc-etc-cuda1/Untitled%206.png](/assets/img/post_img/2021-04-22-etc-etc-cuda1/Untitled%206.png)

- 컴파일러 번경

소스코드 우클릭 >> 속성 

![/assets/img/post_img/2021-04-22-etc-etc-cuda1/Untitled%207.png](/assets/img/post_img/2021-04-22-etc-etc-cuda1/Untitled%207.png)

일반 >> 항목형식 >> CUDA C/C++

![/assets/img/post_img/2021-04-22-etc-etc-cuda1/Untitled%208.png](/assets/img/post_img/2021-04-22-etc-etc-cuda1/Untitled%208.png)