import React from 'react';
import styled from 'styled-components';

import CommunitySlide from './FeatureContainer/CommunitySlide';
import ProductFeatures from './FeatureContainer/ProductFeatures';

const FeatureContainer = () => {
  return (
    <FeatureBox>
      <CommunitySlide></CommunitySlide>
      <ProductFeatures></ProductFeatures>
    </FeatureBox>
  );
};

const FeatureBox = styled.div`
  position: relative;
`;
export default FeatureContainer;
