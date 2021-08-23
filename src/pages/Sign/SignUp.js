import React, { useState } from 'react';
import { useHistory } from 'react-router';
import StyledButton from './Button';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import styled, { ThemeProvider, keyframes, css } from 'styled-components';
import { REDIRECT_URI, REST_API_KEY } from '../../config';

function SignUp() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const history = useHistory();
  const goToSignIn = () => {
    history.push('/signin');
  };

  const toggleButton = () => {
    setIsButtonClicked(!isButtonClicked);
  };

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
            {isButtonClicked && (
              <PasswordInput placeholder="비밀번호"></PasswordInput>
            )}
            <StyledButton onClick={toggleButton}>가입하기</StyledButton>
          </div>
          <Login onClick={goToSignIn}>회원 로그인</Login>
        </InnerWrapper>
      </Container>
    </Background>
  );
}

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

export default SignUp;
