import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  const list = Object.entries(NAVLIST);
  const [selectedKey, setSelectedKey] = useState();
  const [modal, setModal] = useState(false);
  const history = useHistory();
  const goToSignUp = () => {
    history.push('/sign');
  };

  return (
    <>
      <Ad>Ader Error x CASETiFANY 출시 구매하기</Ad>
      <NavContainter>
        <a href="/">
          <Logo src="/images/CASTIFANY.png" />
        </a>
        <NavList>
          {list.map(([key]) => {
            return (
              <NavListContent onMouseOver={() => setSelectedKey(key)}>
                {MATCH_TITLE[key]}
              </NavListContent>
            );
          })}
        </NavList>
        <NavIcon>
          <NavIconContent>
            <FontAwesomeIcon icon={faSearch} />
          </NavIconContent>
          <NavIconContent>
            <FontAwesomeIcon icon={faShoppingCart} />
          </NavIconContent>
          <UserBox>
            <NavIconContent>
              <FontAwesomeIcon
                icon={faUserAlt}
                // !token? {goToSignUp}:
                onClick={() => {
                  setModal(!modal);
                }}
              />
            </NavIconContent>
            {modal === true ? (
              <UserInfo>
                <UserInfoList>내 갤러리</UserInfoList>
                <UserInfoList>설정</UserInfoList>
                <UserInfoList>주문 현황</UserInfoList>
                <UserInfoList>지원</UserInfoList>
                <UserInfoList>로그아웃</UserInfoList>
              </UserInfo>
            ) : null}
          </UserBox>
        </NavIcon>
      </NavContainter>
      <NavModalContainer>
        <NavModal onMouseLeave={() => setSelectedKey()}>
          <NavModalContent>
            <NavModalWrap>
              {selectedKey &&
                NAVLIST[selectedKey].productList.map(el => {
                  return (
                    <>
                      <NavModalListWrap>
                        <NavModalListTitle>{el.subTitle}</NavModalListTitle>
                        <NavModalList>
                          {el.list.map(el => (
                            <NavModalListContent>{el}</NavModalListContent>
                          ))}
                        </NavModalList>
                      </NavModalListWrap>
                    </>
                  );
                })}
              {selectedKey &&
                NAVLIST[selectedKey]['imgdes'].map(el => {
                  return (
                    <NavModalImageWrap>
                      <NavModalImage src={el.imgSrc}></NavModalImage>
                      <div>{el.des}</div>
                    </NavModalImageWrap>
                  );
                })}
            </NavModalWrap>
          </NavModalContent>
        </NavModal>
      </NavModalContainer>
    </>
  );
}

const Ad = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 33px;
  background-color: #f15b41;
  color: white;
  font-size: 15px;
`;

const NavContainter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

const Logo = styled.img`
  width: 240px;
  height: 40px;
  position: relative;
  left: 10vw;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  width: 1160px;
`;

const NavListContent = styled.div`
  padding: 0 16px;
  font-size: 18px;
  font-weight: bold;
  padding: 25px;
  color: #333333;
`;

const NavIcon = styled.div`
  position: relative;
  right: 20px;
  display: flex;
  font-size: 25px;
  color: #333333;
  right: calc(env(safe-area-inset-left) + 10px);
`;
const NavIconContent = styled.div`
  padding: 0 8px;
`;

const UserBox = styled.div`
  position: relative;
`;

const UserInfo = styled.ul`
  position: fixed;
  top: 113px;
  right: 17px;
  font-size: 15px;
  border: 1px solid gray;
  padding: 9px 0;
`;

const UserInfoList = styled.li`
  line-height: 2rem;
  padding: 0 20px;
`;

const NavModalContainer = styled.div``;

const NavModal = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  padding: 20px 20px;
`;

const NavModalContent = styled.div`
  display: flex;
  // width: 700px;
  padding: 20 10px;
  margin-left: 10%;
`;

const NavModalWrap = styled.div`
  display: flex;
`;

const NavModalListWrap = styled.div`
  margin: 0 20px;
`;

const NavModalImageWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavModalImage = styled.img`
  width: 368px;
  height: 243px;
`;

const NavModalListTitle = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 7px;
`;

const NavModalList = styled.ul`
  font-size: 15px;
  margin-bottom: 7px;
`;

const NavModalListContent = styled.li`
  font-size: 15px;
  margin-bottom: 5px;
  line-height: 2em;
`;

const NAVLIST = {
  product: {
    productList: [
      {
        subTitle: '상의',
        list: [
          '반팔 티셔츠',
          '긴팔 티셔츠',
          '후드 티셔츠',
          '맨투맨/스웨트 셔츠',
          '셔츠/블라우스',
        ],
      },
      {
        subTitle: '하의',
        list: ['데님 팬츠', '숏 팬츠', '코튼 팬츠', '기타 바지'],
      },
      {
        subTitle: '액세서리',
        list: ['모자', '가방', '시계', '안경'],
      },
    ],
    imgdes: [
      {
        imgSrc: '/images/image1.png',
        des: '아이폰 12 프로 울트라 임팩트 범퍼 케이스',
      },
    ],
  },
  collection: {
    productList: [
      {
        subTitle: '상의2',
        list: [
          '반팔 티셔츠',
          '긴팔 티셔츠',
          '후드 티셔츠',
          '맨투맨/스웨트 셔츠',
          '셔츠/블라우스',
        ],
      },
      {
        subTitle: '하의2',
        list: ['데님 팬츠', '숏 팬츠', '코튼 팬츠', '기타 바지'],
      },
      {
        subTitle: '액세서리2',
        list: ['모자', '가방', '시계', '안경'],
      },
    ],
    imgdes: [
      {
        imgSrc: '/images/image2.png',
        des: '아이폰 12 프로 울트라 임팩트 범퍼 케이스',
      },
    ],
  },
  customProduct: {
    productList: [
      {
        subTitle: '상의3',
        list: [
          '반팔 티셔츠',
          '긴팔 티셔츠',
          '후드 티셔츠',
          '맨투맨/스웨트 셔츠',
          '셔츠/블라우스',
        ],
      },
      {
        subTitle: '하의3',
        list: ['데님 팬츠', '숏 팬츠', '코튼 팬츠', '기타 바지'],
      },
      {
        subTitle: '액세서리3',
        list: ['모자', '가방', '시계', '안경'],
      },
    ],
    imgdes: [
      {
        imgSrc: '/images/image3.png',
        des: '아이폰 12 프로 울트라 임팩트 범퍼 케이스',
      },
    ],
  },
  collabo: {
    productList: [
      {
        subTitle: '상의4',
        list: [
          '반팔 티셔츠',
          '긴팔 티셔츠',
          '후드 티셔츠',
          '맨투맨/스웨트 셔츠',
          '셔츠/블라우스',
        ],
      },
      {
        subTitle: '하의4',
        list: ['데님 팬츠', '숏 팬츠', '코튼 팬츠', '기타 바지'],
      },
      {
        subTitle: '액세서리4',
        list: ['모자', '가방', '시계', '안경'],
      },
    ],
    imgdes: [
      {
        imgSrc: '/images/image4.png',
        des: '아이폰 12 프로 울트라 임팩트 범퍼 케이스',
      },
    ],
  },
  AboutUs: {
    productList: [
      {
        subTitle: '상의5',
        list: [
          '반팔 티셔츠',
          '긴팔 티셔츠',
          '후드 티셔츠',
          '맨투맨/스웨트 셔츠',
          '셔츠/블라우스',
        ],
      },
      {
        subTitle: '하의5',
        list: ['데님 팬츠', '숏 팬츠', '코튼 팬츠', '기타 바지'],
      },
      {
        subTitle: '액세서리5',
        list: ['모자', '가방', '시계', '안경'],
      },
    ],
    imgdes: [
      {
        imgSrc: '/images/image5.png',
        des: '아이폰 12 프로 울트라 임팩트 범퍼 케이스',
      },
    ],
  },
};

const MATCH_TITLE = {
  product: '제품',
  collection: '컬렉션',
  customProduct: '커스텀 제품',
  collabo: '콜라보',
  AboutUs: 'About Us',
};

export default Nav;
