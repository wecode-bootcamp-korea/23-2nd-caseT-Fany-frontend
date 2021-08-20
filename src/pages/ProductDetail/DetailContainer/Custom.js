import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Custom = ({
  setCoordinate,
  setFontSize,
  text,
  setText,
  setFontStyle,
  setFontColor,
}) => {
  const [style, setStyle] = useState({});
  const [textColor, setTextColor] = useState({});

  const leftClick = () => {
    setCoordinate('left');
    setFontSize('20');
  };
  const centerClick = () => {
    setCoordinate('center');
    setFontSize('40');
  };
  const rightClick = () => {
    setCoordinate('right');
    setFontSize('20');
  };

  useEffect(() => {
    axios
      .get('/data/CustomStyleBox.json')
      .then(res => {
        setStyle({ ...style, ...res.data });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get('/data/TextColorBox.json')
      .then(res => {
        setTextColor({ ...textColor, ...res.data });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <OptionChoice>
      <OptionTilte>커스텀 제작하기</OptionTilte>
      <CustomContainer>
        <CustomChoice>
          <CustomStyle>
            <p>레이아웃</p>
            <ul>
              <CustomLayoutBox
                color="#FF7F7F"
                onClick={leftClick}
                picture={'/images/left.png'}
              />
              <CustomLayoutBox
                color="#BAE7AF"
                onClick={centerClick}
                picture={'/images/center.png'}
              />
              <CustomLayoutBox
                color="#AFC4E7"
                onClick={rightClick}
                picture={'/images/right.png'}
              />
            </ul>
          </CustomStyle>
          <CustomStyle>
            <p>스타일</p>
            <ul>
              {style.CustomStyleBox &&
                style.CustomStyleBox.map(e => {
                  return (
                    <CustomStyleBox
                      onClick={() => setFontStyle(e.font)}
                      picture={e.url}
                    />
                  );
                })}
            </ul>
          </CustomStyle>
        </CustomChoice>
        <CustomText>
          <h6>텍스트</h6>
          <TextInput
            type="text"
            maxLength="8"
            onChange={e => setText(e.target.value)}
          />
          <p>({text.length}/8자 입력)</p>
        </CustomText>
        <TextColor>
          <p>텍스트 색상</p>

          {textColor.TextColorBox &&
            textColor.TextColorBox.map(e => {
              return (
                <TextColorBox
                  onClick={() => setFontColor(e.fontColor)}
                  color={e.fontColor}
                />
              );
            })}
        </TextColor>
      </CustomContainer>
    </OptionChoice>
  );
};

const OptionChoice = styled.div`
  margin: 8px 0;
  background-color: white;
  font-weight: 600;
`;

const OptionTilte = styled.div`
  padding: 15px 3px 5px 3px;
  font-size: 15px;
`;

const CustomContainer = styled.div`
  ${({ theme }) => theme.CenterAlignment};
  flex-wrap: wrap;
  padding: 10px;
  margin: 6px;
  border: 1px solid #000;
  border-radius: 4px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
`;

const CustomChoice = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0 20px 0;
`;

const CustomStyle = styled.div`
  padding: 0 25px;
  p {
    padding-bottom: 2px;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    width: 140px;
  }
`;

const CustomLayoutBox = styled.div`
  ${({ theme }) => theme.CenterAlignment};
  margin: 3px;
  width: 36px;
  height: 36px;
  border: 2px solid #c3c3c3;
  background: no-repeat center/50% url(${({ picture }) => picture});
  background-color: ${({ color }) => color};
  opacity: 0.8;
  overflow: hidden;
  cursor: pointer;
`;

const CustomStyleBox = styled.div`
  ${({ theme }) => theme.CenterAlignment};
  margin: 3px;
  width: 36px;
  height: 36px;
  border: 2px solid #c3c3c3;
  background: no-repeat center/120% url(${({ picture }) => picture});
  overflow: hidden;
  cursor: pointer;
`;

const CustomText = styled.div`
  padding-top: 20px;
  width: 325px;
  border-top: 1px solid #dee2e6;
  p {
    position: absolute;
    margin-top: -29px;
    margin-left: 250px;
    font-size: 12px;
    color: grey;
  }
`;

const TextInput = styled.input`
  margin: 5px 0;
  padding-left: 10px;
  width: 100%;
  height: 35px;
  color: #495057;
  border: 1px solid #dee2e6;
  border-radius: 2px;
`;

const TextColor = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0;
  width: 325px;
  p {
    width: 100%;
    padding-bottom: 5px;
  }
`;

const TextColorBox = styled.div`
  margin: 3px;
  width: 34px;
  height: 34px;
  background-color: ${({ color }) => color};
  border-radius: 50%;
  box-shadow: inset 0 1.5px 1.5px rgb(0 0 0 / 30%);
  cursor: pointer;
`;

export default Custom;
