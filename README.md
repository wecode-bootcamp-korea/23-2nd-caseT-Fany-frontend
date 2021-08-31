## 23기 프로젝트 Front-end/Back-end 소개
---
📢Show Your Color CASETiFY 클론 프로젝트
짧은 프로젝트 기간동안 개발에 집중해야 하므로 디자인/기획 부분만 클론했습니다.
개발은 초기 세팅부터 전부 직접 구현했으며, 아래 데모 영상에서 보이는 부분은
모두 백앤드와 연결하여 실제 사용할 수 있는 서비스 수준으로 개발한 것입니다.

## 프로젝트 계획 및 기간
---
- 개발기간📆 : 2021/8/16 ~ 2021/8/27
- 1st Sprint : 개발환경 초기세팅, 전체 레이아웃, 컴포넌트화
- 2nd Sprint : 컴포넌트 별 기능 구현, 프론트-백 통신, 코드 리팩토링, conflict 수정 작업

## 페이지별 기능 DEMO
---
### [회원가입(카카오 소셜 로그인)]
![](https://i.ibb.co/JrfJM2N/image.gif)
### [네비게이션 바]
![](https://i.ibb.co/0jM581m/nav.gif)
### [아코디언 메뉴]
![](https://i.ibb.co/C1wqKcg/image.gif)
### [메인 상품 필터]
![](https://i.ibb.co/DDDVHTg/image.gif)
### [제품 상세 페이지]
![](https://i.ibb.co/gRKRbBp/image.gif)
### [제품 리뷰 기능]
![](https://i.ibb.co/DVkvdp0/image.gif)
### [장바구니 기능 구현]

### CASETiFANY Demo 유튜브 링크

## 적용 기술 및 구현 기능
---
### 적용 기술
- Front-End : HTML5, Scss, JavaScript, React, React Router, styled-component
- Back-End : Python, Django, MySql, bcrypt, pyJWT, POSTMAN, linux, aws, docker 
### 사용한 툴
- Common: Slack, Trello, Github, Git

### 구현 기능


####   로그인/회원가입 페이지 (이정일)
- KaKao REST API KEY를 활용한 social Login 구현
- fetch함수를 활용한 백엔드 통신으로 JWT LocalStorage 저장 및 삭제

#### 메인페이지 (이정일)
- Slick Slide를 활용한 캐러셀 구현 및 커스텀 UI 구현
- styled Component로 UI 구현

#### 공통 네비게이션, 푸터 구현 (박태환)
- 공통 Nav, Footer UI 구현
- Local Storage에서의 토큰의 여부를 통해 로그인 여부 확인 후 로그인 여부에 따라 다른 기능(회원가입 페이지로 이동 / 마이페이지 모달) 구현
- megaDropdown menu bar 구현
- Local Storage에서 토큰을 삭제로 로그아웃 기능
- path parameter이용해 페이지 간 이동 기능 구현

#### 상품 리스트 페이지 (박태환)
- query parameter를 이용해 클릭한 상품이 목록에 추가되도록 필터링 기능 구현.
- 조건부 렌더링을 이용해 accordion menu 구현

#### 상세페이지 (박정우)
- Styled Component를 이용한 상세페이지 UI 구현
- React slick 라이브러를 이용한 캐러셀 기능 구현
- Canvas 태그를 이용한 사진 커스텀 기능 구현
- 사이즈/색상 옵션 선택 기능 구현
- 카트에 담을 시 장바구니 모달 나오도록 구현

#### 장바구니 (박정우)
- 장바구니 페이지 UI 구현
- 제품별 삭제 기능 구현
- 제품 장바구니 삭제, 수량 증감에 따라 총 결제 금액 변동 구현

#### 상품리뷰(차예은)
- 상품리뷰 UI구현
- 이미지파일, 텍스트, 별점을 form-data로 구성해서 백엔드와 통신

### 팀원
--- 
- 프론트엔드: 박정우, 박태환, 이정일, 차예은
- 백엔드: 김훈태, 한승훈
### Reference
---
- 이 프로젝트는 CASETiFY 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
