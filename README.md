# pre-onboarding-lululab

<img src="https://img.shields.io/badge/-JavaScript-%23F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"/>&nbsp;
<img src="https://camo.githubusercontent.com/93907c63a75a4b788c8f5ab36b7064add824dd890c2de95e8a965c5460dc5268/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f457870726573732d3030303030303f7374796c653d666f722d7468652d6261646765266c6f676f3d45787072657373266c6f676f436f6c6f723d7768697465"/>&nbsp;
<img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white"/>&nbsp;
<img src="https://camo.githubusercontent.com/6505d9c38a846a4059abd0067583de4731793449ba28992b2b985e2d75d09ec5/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f547970654f524d2d3236323632373f7374796c653d666f722d7468652d6261646765266c6f676f3d547970654f524d266c6f676f436f6c6f723d7768697465"/>&nbsp;
<img src="https://camo.githubusercontent.com/404982277edad8c6c6e5a3da5b480ebc7e0dba541603a0213ecdca99abf4ffde/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f706f73746d616e2d2532334646364333373f7374796c653d666f722d7468652d6261646765266c6f676f3d706f73746d616e266c6f676f436f6c6f723d7768697465"/>&nbsp;

## 개요

원티드 프리온보딩 lululab 과제입니다.

병원 예약 시스템으로 예약 가능한 날짜와 시간을 선택하여 예약을 할 수 있습니다.

- 개발 기간: 2022-10-16 ~ 2022-10-17
- 개발 인원: 1명 (안수철)

## 프로젝트 구조

### DB모델링

https://dbdiagram.io/d/634a99e4f0018a1c5f0cfb41

## 구현 기능

### 1. 로그인, 회원가입

- 이름, 이메일, 비밀번호, 전화번호를 입력 받아 회원가입 가능
- 이메일과 비밀번호를 입력 받아 로그인 성공시 토큰 발행. 토큰 유효기간은 24시간

### 2. 병원 목록 조회

- 예약하고자 하는 날짜와 시간을 입력 받아 예약 가능한 병원 리스트를 확인 가능

### 3. 병원 예약

- 로그인시 발행한 토큰과 예약하고자 하는 병원의 id값, 예약 날짜 및 시간, 예약 종류를 입력 받아 예약 테이블에 저장
- 예약 번호는 유저의 id값 + 예약 날짜 + 예약 시간 + 예약 종류의 id값 + 병원의 id값
- 이미 예약한 유저는 다른 예약 불가
- 이미 예약된 시간에는 다른 예약 불가

### 4. 예약 변경

- 로그인시 발행한 토큰과 예약 번호를 입력 받아 예약한 유저가 맞으면 예약 내용 수정 가능
- 예약 날짜 및 시간, 예약 종류 변경 가능
- 이미 예약된 시간으로는 에약 변경 불가

### 5. 내 예약 정보 확인

- 로그인시 발행한 토큰 또는 예약 번호를 입력 받아 예약 정보 확인 가능

## API doc

https://documenter.getpostman.com/view/22723177/2s847EQZQN
