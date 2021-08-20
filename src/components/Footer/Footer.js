import React from 'react';
import styled, { css } from 'styled-components';

function Footer() {
  return (
    <FooterContainer>
      <FooterTop>
        <FooterTopLeft>
          <FooterTopLeftTitle>뉴스레터 구독하기</FooterTopLeftTitle>
          <FooterForm>
            <FooterFormBox>
              <FooterInput></FooterInput>
              <FooterBtn></FooterBtn>
            </FooterFormBox>
          </FooterForm>
          <FooterTopContent>케이스티파니를 팔로우 해주세요!</FooterTopContent>
          <div>아이콘</div>
        </FooterTopLeft>
        <FooterTopCenter>
          <FooterTopCenterTitle>상품</FooterTopCenterTitle>
          <FooterTopCenterUl>
            <FooterTopCenterLi>브랜드 소개</FooterTopCenterLi>
            <FooterTopCenterLi>Book CASETIFANY Cube</FooterTopCenterLi>
            <FooterTopCenterLi>Co-Lab Mobile App</FooterTopCenterLi>
            <FooterTopCenterLi>언론/보도</FooterTopCenterLi>
            <FooterTopCenterLi>기프트 카드</FooterTopCenterLi>
            <FooterTopCenterLi>고객 후기</FooterTopCenterLi>
            <FooterTopCenterLi>매장 방문하기</FooterTopCenterLi>
            <FooterTopCenterLi>채용정보</FooterTopCenterLi>
            <FooterTopCenterLi>아이폰</FooterTopCenterLi>
          </FooterTopCenterUl>
        </FooterTopCenter>
        <FooterTopRight>
          <FooterTopRightTitle>지원</FooterTopRightTitle>
          <FooterTopRightUl>
            <FooterTopRightLi>자주묻는 질문</FooterTopRightLi>
            <FooterTopRightLi>직접 문의하기</FooterTopRightLi>
            <FooterTopRightLi>아티스트 문의</FooterTopRightLi>
            <FooterTopRightLi>학생 할인</FooterTopRightLi>
          </FooterTopRightUl>
        </FooterTopRight>
      </FooterTop>
      <FooterMiddle>
        <FooterMiddleBox>
          <div>Great</div>
          <div>별 다섯 개</div>
          <div>19,350 reviews on</div>
          <div>별 Trustpilot</div>
        </FooterMiddleBox>
        <FooterMiddleContent>
          <FooterMiddleContentP>
            케이스티파이 유한회사 (CASETiFY) | 대표: 응푸이순 웨슬리 (Wesley Ng)
          </FooterMiddleContentP>
          <FooterMiddleContentP>
            사업자등록번호: 580-88-02026 | 통신판매업 신고번호: 제
            2021-서울강남-03049 호
          </FooterMiddleContentP>
          <FooterMiddleContentP>
            주소: 서울시 강남구 테헤란로2길27 (패스트파이브빌딩), 829호
          </FooterMiddleContentP>
          <FooterMiddleContentP>
            CS Center: hello@casetify.com
          </FooterMiddleContentP>
          <FooterMiddleContentP>
            휴무: 토요일, 일요일, 공휴일 휴무
          </FooterMiddleContentP>
        </FooterMiddleContent>
      </FooterMiddle>
      <FooterBottom>
        <FooterBottomHr></FooterBottomHr>
        <FooterBottomBox>
          <FooterBottomBoxFirst>Copyright 2021 CASETIFANY</FooterBottomBoxFirst>
          <FooterBottomBoxSecond>개인정보 처리방침</FooterBottomBoxSecond>
          <FooterBottomBoxThird>약관</FooterBottomBoxThird>
          <FooterBottomRight>한국어</FooterBottomRight>
        </FooterBottomBox>
      </FooterBottom>
    </FooterContainer>
  );
}

const FlexColumn = css`
  display: flex;
  flex-direction: column;
`;

const FooterContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  align-items: center;
  width: 100%;
  color: white;
  background-color: #333333;
  ${FlexColumn};
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: center;
  width: 1200px;
  margin: 0 auto;
  padding: 24px 20px;
`;

const FooterTopLeft = styled.div`
  width: 33.3%;
  padding: 0 10px;
`;

const FooterTopLeftTitle = styled.div`
  margin-bottom: 16px;
`;

const FooterForm = styled.form`
  max-width: 90%;
`;

const FooterFormBox = styled.div`
  display: flex;
`;

const FooterInput = styled.input.attrs({
  type: 'email',
  placeholder: '이메일 주소를 입력하세요.',
})`
  width: 100%;
  height: 44px;
  padding: 0 11px;
  background-color: white;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  &::placeholder {
    font-size: 15px;
  }
`;

const FooterBtn = styled.input.attrs({
  type: 'submit',
  value: '가입하기',
})`
  height: 44px;
  padding: 1px 20px;
  color: white;
  background-color: #f15b47;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  font-size: 15px;
`;

const FooterTopContent = styled.div`
  margin: 48px 0 16px 0;
`;

const FooterTopCenter = styled.div`
  width: 25%;
  padding: 0 10px;
`;

const FooterTopCenterTitle = styled.div`
  margin-bottom: 16px;
`;

const FooterTopCenterUl = styled.ul`
  margin-bottom: 9px;
`;
const FooterTopCenterLi = styled.li`
  margin: 15px 0;
  font-size: 13.5px;
`;

const FooterTopRight = styled.div`
  width: 25%;
  padding: 0 10px;
`;

const FooterTopRightTitle = styled.div`
  margin-bottom: 16px;
`;

const FooterTopRightUl = styled.ul`
  margin-bottom: 9px;
`;
const FooterTopRightLi = styled.li`
  margin: 15px 0;
  font-size: 13.5px;
`;

const FooterMiddle = styled.div`
  align-items: center;
  width: 1200px;
  padding: 24px 20px;
  ${FlexColumn}
`;

const FooterMiddleBox = styled.div`
  display: flex;
  margin: 0 auto;
  margin-bottom: 40px;
`;

const FooterMiddleContent = styled.div`
  align-items: center;
  padding: 0 10px;
  color: #666666;
  font-size: 12px;
  ${FlexColumn}
`;

const FooterMiddleContentP = styled.p`
  height: 24px;
`;

const FooterBottom = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 0 20px 24px 20px;
  ${FlexColumn}
`;

const FooterBottomHr = styled.hr`
  width: 83%;
  margin: 18px 0;
  border: 1px solid #f2f2f2;
`;

const FooterBottomBox = styled.div`
  display: flex;
  font-size: 15px;
`;

const FooterBottomBoxFirst = styled.div`
  padding-right: 30px;
  border-right: 1px solid;
`;

const FooterBottomBoxSecond = styled.div`
  padding: 0 30px;
  border-right: 1px solid;
`;

const FooterBottomBoxThird = styled.div`
  padding: 0 30px;
`;

const FooterBottomRight = styled.div`
  position: relative;
  right: -418px;
`;

export default Footer;
