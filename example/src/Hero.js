import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  padding: 100px 0;
  margin: 0 auto;
  width: 100%;
  text-align: center;
  background-color: #fff;
  border-bottom: 1px dashed #33b0d6;
  span, a{
    color: #33b0d6;
    display: block;
    &:nth-child(1){
    font-size: 36px;
    }
    &:nth-child(2){
    font-size: 14px;
    }
  }
  a{
    text-decoration: none;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <span>React-kitui documentation</span>
      <span>For better and more convenient component creation</span>
    </HeroContainer>
  )
}

export default Hero
