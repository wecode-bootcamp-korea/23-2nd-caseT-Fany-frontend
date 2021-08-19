import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

function Redirect() {
  const location = useLocation();
  console.log(location);

  const history = useHistory();
  let _code = location.search.split(`?code=`);
  console.log(_code[1]);
  useEffect(() => {
    fetch('http://10.58.7.199:8000/users/kakaocallback', {
      method: 'get',
      headers: { authorization: _code },
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        localStorage.setItem(LOGIN_KEY, JSON.stringify(res));
        history.push('/');
      });
  });

  return <div>kakao Rest Api redirect page</div>;
}
export const LOGIN_KEY = 'response';
export default Redirect;
