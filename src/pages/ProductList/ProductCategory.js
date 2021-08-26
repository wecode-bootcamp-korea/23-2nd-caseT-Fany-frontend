import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';

function ProductCategory(titleProp, subtitleProp) {
  const [check, setCheck] = useState(true);
  const location = useLocation();
  const history = useHistory();

  const onChangeCheckbox = function (e) {
    const checked = e.target.checked;
    console.log(e.target.value);
    console.log(location.search);

    const nowUrl = location.pathname + location.search;
    const addUrl = nowUrl + `&detail_category=${e.target.value}`;
    const minusUrl = nowUrl.replace(`&detail_category=${e.target.value}`, '');

    if (checked) {
      history.push(addUrl);
    } else {
      history.push(minusUrl);
      console.log('!checked');
    }
  };

  console.log(location.search);
  console.log(
    'subtitle',
    Object.entries({ titleProp }.titleProp.subtitleProp.list[0])
  );
  const title = { titleProp }.titleProp.titleProp;
  const subtitle = { titleProp }.titleProp.subtitleProp;
  console.log(check);
  return (
    <SectionListWraper>
      <SectionFilter>
        <FilterCheckbox type="checkbox" checked={check} />
        <FilterTitle onClick={() => setCheck(!check)}>{title}</FilterTitle>
      </SectionFilter>
      <FilterListContainer>
        {Object.entries(subtitle.list[0]).map(([listName, listId]) => {
          return (
            check && (
              <FilterListWrap>
                <FilterList>
                  <FilterListCheckbox
                    type="checkbox"
                    onChange={onChangeCheckbox}
                    value={listId.id}
                  />
                  <FilterListContent>{listName}</FilterListContent>
                </FilterList>
              </FilterListWrap>
            )
          );
        })}
      </FilterListContainer>
    </SectionListWraper>
  );
}

export default ProductCategory;

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
  height: 'auto';
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
const SectionProductWraper = styled.div`
  flex: 1 1 0%;
  flex-wrap: wrap;
  justify-content: center;
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
