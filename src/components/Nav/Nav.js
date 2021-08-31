import React, { useState } from 'react';
import styled from 'styled-components';
import Cart from '../../pages/Cart/Cart';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { TOKEN_KEY } from '../../config';

function Nav() {
  const list = Object.entries(NAVLIST);
  const [selectedKey, setSelectedKey] = useState();
  const [modal, setModal] = useState(false);
  const [cartModal, setCartModal] = useState(false);
  const history = useHistory();
  const goToSignUp = () => {
    history.push('/signup');
  };
  const goToProducList = () => {
    history.push('/list?category=1');
  };

  const cartModalOn = () => {
    if (localStorage.getItem('token')) {
      setCartModal(!cartModal);
      console.log(cartModal);
    }
  };

  const cartModalOff = () => {
    setCartModal(!cartModal);
    console.log(cartModal);
  };

  const LoginModal = () => {
    if (localStorage.getItem('token')) {
      setModal(!modal);
    } else {
      history.push('/signup');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setModal(!modal);
    alert('로그아웃 되었습니다.');
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
          <CartBox>
            <NavIconContent>
              <FontAwesomeIcon
                onClick={() => cartModalOn()}
                icon={faShoppingCart}
              />
            </NavIconContent>
            {cartModal === true ? <Cart /> : null}
          </CartBox>
          <UserBox>
            <NavIconContent>
              <FontAwesomeIcon icon={faUserAlt} onClick={() => LoginModal()} />
            </NavIconContent>
            {modal === true ? (
              <UserInfo>
                <UserInfoList>내 갤러리</UserInfoList>
                <UserInfoList>설정</UserInfoList>
                <UserInfoList>주문 현황</UserInfoList>
                <UserInfoList>지원</UserInfoList>
                <UserInfoList onClick={() => logout()}>로그아웃</UserInfoList>
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
                            <NavModalListContent onClick={goToProducList}>
                              {el}
                            </NavModalListContent>
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
  cursor: pointer;
`;

const NavIcon = styled.div`
  position: relative;
  right: 20px;
  display: flex;
  font-size: 25px;
  color: #333333;
  right: calc(env(safe-area-inset-left) + 10px);
  cursor: pointer;
`;
const NavIconContent = styled.div`
  padding: 0 8px;
`;

const UserBox = styled.div`
  position: relative;
`;

const CartBox = styled.div`
  position: relative;
`;

const UserInfo = styled.ul`
  position: fixed;
  top: 113px;
  right: 17px;
  font-size: 15px;
  border: 1px solid gray;
  padding: 9px 0;
  background-color: white;
  cursor: pointer;
  z-index: 300;
`;

const UserInfoList = styled.li`
  line-height: 2rem;
  padding: 0 20px;
  cursor: pointer;
`;

const NavModalContainer = styled.div``;

const NavModal = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  padding: 20px 20px;
  z-index: 100;
  background-color: white;
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
  cursor: pointer;
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
        subTitle: '시그니처 프린트',
        list: [
          '베스트셀러',
          '신상품',
          '인기 인스타그램 디자인',
          'As Seen On TikTok',
          '나비프린트',
          '텍스트 그래픽',
          '스티커 컬렉션',
        ],
      },
      {
        subTitle: '컬렉션',
        list: [
          '울트라 에코 티셔츠',
          '일회용 티셔츠',
          '맥세이프 호환 티셔츠',
          '갤럭시 베스트셀러',
        ],
      },
      {
        subTitle: '아티스트 컬렉션',
        list: ['팬그램 팬그램', 'Insert Name Here', '컬렉션 모두 보기'],
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
        subTitle: '커스텀 상의',
        list: [
          '반팔 티셔츠',
          '긴팔 티셔츠',
          '후드 티셔츠',
          '맨투맨/스웨트 셔츠',
          '셔츠/블라우스',
        ],
      },
      {
        subTitle: '커스텀 하의',
        list: ['데님 팬츠', '숏 팬츠', '코튼 팬츠', '기타 바지'],
      },
      {
        subTitle: '커스텀 액세서리',
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
        subTitle: '콜라보1',
        list: ['KFC', 'Coke', 'Space Jam', 'Balansa', 'Saturdays NYC'],
      },
      {
        subTitle: '콜라보2',
        list: ['Disney Princess', '원피스', 'Basquiat', 'Louvre'],
      },
    ],
    imgdes: [
      {
        imgSrc: '/images/image5.png',
        des: '아이폰 12 프로 울트라 임팩트 범퍼 케이스',
      },
    ],
  },
  AboutUs: {
    productList: [
      {
        subTitle: 'About Us',
        list: [
          '#CASETiFANYSUSTAINABILTY',
          '#CASETiFANYprotects',
          '#CASETiFANYCares',
          'About Us',
        ],
      },
    ],
    imgdes: [
      {
        imgSrc: '/images/image4.png',
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
