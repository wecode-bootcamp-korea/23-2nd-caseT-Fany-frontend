import React, { useState } from 'react';
import StyledButton from './StyledButton';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import styled, { ThemeProvider, keyframes, css } from 'styled-components';

function SignIn() {
  return (
    <Background>
      <Overlay />
      <Container>
        <InnerWrapper>
          <Title>CASETiFANY에 가입하세요</Title>
          <ButtonWrapper>
            <StyledButton backgroundColor="facebook">
              Sign up with Facebook
            </StyledButton>
            <StyledButton backgroundColor="instagram">
              Sign Up with instagram
            </StyledButton>
            <StyledButton backgroundColor="kakao" color="black">
              <a
                href={`https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`}
              >
                1분만에 회원가입 하기
              </a>
            </StyledButton>
          </ButtonWrapper>
          <LineBreak>
            <Line />
            <span>또는</span>
            <Line />
          </LineBreak>
          <div>
            <EmailInput placeholder="이메일"></EmailInput>
            <PasswordInput placeholder="비밀번호"></PasswordInput>
            <StyledButton>로그인</StyledButton>
          </div>
          <Login />
          비밀번호를 잊으셨세요?
        </InnerWrapper>
      </Container>
    </Background>
  );
}

const REST_API_KEY = '50fdc857a648695ad7679fc8cb92a225';
const REDIRECT_URI = 'http://localhost:3000/redirect';

const displayFlex = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Background = styled.div`
  ${displayFlex};
  position: relative;
  height: 100vh;
  background-image: url(images/signUpBackground.jpg);
  background-size: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Container = styled.div`
  width: 450px;
  padding: 20px;
  background-color: white;
  text-align: center;
  z-index: 1;
`;

const InnerWrapper = styled.div`
  margin: 0 60px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  color: #666666;
  font-weight: 600;
  font-family: 'pangram', Helvetica, Arial, sans-serif;
`;

const ButtonWrapper = styled.div`
  ${displayFlex};
  justify-content: space-around;
  flex-direction: column;
  margin-bottom: 10px;
`;

const LineBreak = styled.div`
  ${displayFlex};
  justify-content: space-between;
  height: 15px;
  margin-bottom: 25px;
`;

const Line = styled.div`
  width: 40%;
  border-top: 1px solid black;
`;

const Login = styled.p`
  font-size: 18px;
  color: #666666;
  &:hover {
    cursor: pointer;
  }
`;

export default SignIn;
