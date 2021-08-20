import React from 'react';
import styled from 'styled-components';

const ProductFeatures = () => {
  return (
    <FeatureTitleContainer>
      <FeatureTitle>Product Features</FeatureTitle>
      <FeatureImage src="/images/featureDetail.jpg" />
    </FeatureTitleContainer>
  );
};

const FeatureTitleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 150px;
`;

const FeatureTitle = styled.h1`
  font-size: 30px;
  font-family: 'Hammersmith One';
`;

const FeatureImage = styled.img`
  width: 100%;
  height: auto;
`;

export default ProductFeatures;
