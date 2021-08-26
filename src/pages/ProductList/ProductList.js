import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';
import ProductCategory from './ProductCategory';

function ProductList() {
  const [product, setproduct] = useState([]);
  const [productList, setProductList] = useState([]);
  const [check, setCheck] = useState(true);
  const location = useLocation();
  const history = useHistory();

  const getProduct = () => {
    fetch(`http://10.58.3.187:8000/product${location.search}`)
      .then(res => res.json())
      .then(res => setproduct(res.results));
  };

  const getProductList = () => {
    fetch('/data/productsList.json')
      .then(res => res.json())
      .then(res => setProductList(res.tshirts));
  };

  useEffect(() => {
    getProduct();
    getProductList();
  }, [location.search]);

  const changeSubCategory = function (id) {
    history.push(`/list?category=1&sub_category=${id}`);
  };

  console.log(`http://10.58.3.187:8000/products${location.search}`);
  return (
    <ProductListContainer>
      <HeaderContainer>
        <HeaderTitle>반팔</HeaderTitle>
        <HeaderUl>
          <HeaderLi>전 상품</HeaderLi>
          <HeaderLiSector>/</HeaderLiSector>
          <HeaderLi>반팔</HeaderLi>
          <HeaderLiSector>/</HeaderLiSector>
        </HeaderUl>
      </HeaderContainer>
      <Section>
        <SectionAside>
          <SectionTitleWraper>
            {Object.keys(productList).map(title => {
              return <SectionTitleList>{title}</SectionTitleList>;
            })}
          </SectionTitleWraper>
          {Object.entries(productList).map(([title, subtitle]) => {
            return (
              <SectionListWraper>
                <SectionFilter>
                  <FilterCheckbox type="checkbox" checked={check} />
                  <FilterTitle FilterTitle onClick={() => setCheck(!check)}>
                    {title}
                  </FilterTitle>
                </SectionFilter>
                <FilterListContainer checked={check}>
                  {Object.keys(subtitle.list[0]).map(list => {
                    return (
                      <FilterListWrap>
                        <FilterList>
                          <FilterListCheckbox type="checkbox" />
                          <FilterListContent>{list}</FilterListContent>
                        </FilterList>
                      </FilterListWrap>
                    );
                  })}
                </FilterListContainer>
              </SectionListWraper>
            );
          })}
          <SectionListWraper>
            <SectionFilter>
              <FilterCheckbox type="checkbox" checked={check} />
              <FilterTitle FilterTitle onClick={() => setCheck(!check)}>
                컬러 & 패턴
              </FilterTitle>
            </SectionFilter>
            <FilterListContainer checked={check}>
              <FilterListWrap>
                <FilterList>
                  <ColorPickerWraper>
                    {Object.entries(COLOR).map(([name, property]) => {
                      const code = property.code;
                      return (
                        <ColorPicker>
                          <ColorPickerBtn
                            style={{ backgroundColor: `${code}` }}
                          />
                          {name}
                        </ColorPicker>
                      );
                    })}
                  </ColorPickerWraper>
                </FilterList>
              </FilterListWrap>
            </FilterListContainer>
          </SectionListWraper>
        </SectionAside>
        <SectionProduct>
          {product.map(item => (
            <ProductWraper>
              <ProductImgBox>
                <ProductImg src={item.main_image} alt="case" />
              </ProductImgBox>
              <ProductDescription>
                <ProductDescriptionTitle>
                  <ProductTitle>{item.name}</ProductTitle>
                </ProductDescriptionTitle>
                <ProductDescriptionDetail>
                  <ProductSubtitle>부 제목</ProductSubtitle>
                  <ProductPrice>\{item.price}</ProductPrice>
                </ProductDescriptionDetail>
              </ProductDescription>
            </ProductWraper>
          ))}
        </SectionProduct>
      </Section>
    </ProductListContainer>
  );
}

export default ProductList;

const ProductListContainer = styled.div`
  padding: 0 8vw;
`;

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  margin: 30px 15px;
`;

const HeaderTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
  padding-bottom: 64px;
`;

const HeaderUl = styled.ul`
  display: flex;
  padding: 30px 0;
`;

const HeaderLi = styled.li`
  font-size: 16px;
`;
const Section = styled.aside`
  display: flex;
`;
const SectionAside = styled.aside`
  width: calc(25vw - 60px);
`;

const HeaderLiSector = styled.span`
  margin: 0 5px;
`;

const SectionTitleWraper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 15px;
`;

const SectionTitleList = styled.div`
  margin-bottom: 10px;
  padding-bottom: 16px;
  font-size: 18px;
  font-weight: bold;
`;
const SectionListWraper = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid gray;
  margin: 0 15px;
  padding: 30px 0;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.32px;
`;

const SectionFilter = styled.div``;
const FilterCheckbox = styled.input`
  display: none;
`;
const FilterTitle = styled.div`
  position: relative;
  font-size: 16px;
  font-weight: bold;
  &:before {
    content: '';
    position: absolute;
    top: 3px;
    right: 2px;
    display: block;
    width: 7px;
    height: 7px;
    border-top: 2px solid #000;
    border-left: 2px solid #000;
    transform: rotate(225deg);
    transition: transform 0.15s ease-in-out 0s;
  }
`;

const FilterListContainer = styled.div`
  height: ${props => (props.checked === true ? 'auto' : 0)};
  transition: height 0.15s linear 0s;
  overflow: hidden;
`;

const FilterListWrap = styled.ul`
  margin-top: 20px;
`;

const FilterList = styled.li`
  margin-bottom: 5px;
`;
const FilterListCheckbox = styled.input``;

const FilterListContent = styled.span``;

const ColorPickerWraper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const ColorPicker = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33%;
  font-size: 12px;
`;

const ColorPickerBtn = styled.input`
  position: relative;

  width: 30px;
  height: 30px;
  appearance: none;
  outline: none;
  margin: 4px;
  border: 0;
  border-radius: 15px;
`;

const SectionProduct = styled.div`
  flex: 1 1 0%;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  column-gap: 30px;
  grid-template-rows: auto;
  row-gap: 45px;
  padding: 0 0 0 4vw;
`;

const ProductWraper = styled.div``;

const ProductImgBox = styled.div``;
const ProductImg = styled.img``;
const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ProductDescriptionTitle = styled.div``;
const ProductTitle = styled.p`
  font-size: 15px;
  font-weight: 600;
`;

const ProductDescriptionDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductSubtitle = styled.p`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.45);
`;

const ProductColor = styled.p`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.45);
`;

const ProductPrice = styled.p`
  font-size: 12px;
`;

const COLOR = {
  red: {
    name: '레드',
    code: '#DC3F42',
  },
  orange: {
    name: '오렌지',
    code: '#ED7229',
  },
  yellow: {
    name: '옐로우',
    code: '#f3d530',
  },
  blue: {
    name: '블루',
    code: '#59a2f6',
  },
  green: {
    name: '그린',
    code: '#7ECD96',
  },
  purple: {
    name: '퍼플',
    code: '#D0B2C9',
  },
  pink: {
    name: '핑크',
    code: '#FEC2CC',
  },
  brown: {
    name: '브라운',
    code: '#925f44',
  },
  black: {
    name: '블랙',
    code: 'black',
  },
};
