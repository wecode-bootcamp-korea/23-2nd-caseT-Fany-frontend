import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { LOGIN_KEY } from '../RedirectPage/Redirect';

const Main = () => {
  const names = [<img alt="imgslide" />];
  const nameList = names.map(name => {
    return <div>{name}</div>;
  });
  console.log(JSON.parse(localStorage.getItem(LOGIN_KEY)));
  return <div>{nameList}</div>;
};
export default Main;
