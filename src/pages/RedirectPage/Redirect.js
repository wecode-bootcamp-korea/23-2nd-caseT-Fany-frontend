import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { API, REDIRECT_URI, REST_API_KEY } from '../../config';

function Redirect() {
  const location = useLocation();
  const history = useHistory();

  const kakaoCode = location.search.split('?code=')[1];

  fetch(
    `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${kakaoCode}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    }
  )
    .then(res => res.json())
    .then(res =>
      fetch(API.KAKAO_LOGIN, {
        method: 'GET',
        headers: { Authorization: res.access_token },
      })
        .then(res => res.json())
        .then(res => {
          localStorage.setItem('token', res.Token);
          history.push('/');
        })
    );

  // 로그아웃 버튼에 onclick에 localStorage.removeItem('token')하면 로그아웃
  return <div>kakao Login redirectPage</div>;
}

export default Redirect;
