import React from 'react';
import styled, { css } from 'styled-components';

function VideoPanel() {
  return (
    <VideoSection>
      <VideoContainer>
        <VideoWrapper>
          <VideoTitle>
            오직 나만을 위한
            <br /> 특별한 티셔츠, <br />
            지금 바로 만나보세요!
          </VideoTitle>
          <VideoSectionLine></VideoSectionLine>
          <VideoArticle>
            탄탄한 재질에 목늘어남 걱정없는
            <br /> 내맘대로 디자인, 가성비까지!
          </VideoArticle>
          <CustomLinkButton>Custom 하러가기</CustomLinkButton>
        </VideoWrapper>
        <VideoPlay
          controls
          autoplay
          muted
          playsInline
          loop
          src="/images/mainVideo.mp4"
          preload="mainVideo"
        ></VideoPlay>
      </VideoContainer>
    </VideoSection>
  );
}

export default VideoPanel;

const VideoSection = styled.div`
  margin: 50px 0;
`;

const VideoContainer = styled.div`
  position: relative;
  ${({ theme }) => theme.CenterAlignment};
`;

const VideoWrapper = styled.div`
  ${({ theme }) => theme.CenterAlignment};
  flex-direction: column;
  text-align: center;
`;

const VideoTitle = styled.h2`
  padding: 10px 0;
  font-size: 30px;
  font-weight: 800;
  letter-spacing: 3px;
`;

const VideoSectionLine = styled.div`
  margin-bottom: 10px;
  width: 50px;
  height: 2px;
  border: 1px solid #666666;
`;

const VideoArticle = styled.p`
  font-size: 20px;
  letter-spacing: 1.5px;
`;

const CustomLinkButton = styled.button`
  margin: 20px;
  width: 150px;
  height: 50px;
  background-color: #ea594e;
  color: white;
`;

const VideoPlay = styled.video`
  margin-left: 100px;
  width: 500px;
`;
