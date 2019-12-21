import React from 'react';
import styled from 'styled-components';

interface Props {
  text?: string;
  backgroundColor?: string;
  textColor?: string;
  style?: any;
  onClick?: Function;
}

const NotFoundContainer = styled.div`
  padding: 35px;
  display: block;
  margin: 0 auto;
  text-align: center;
  color: ${(p:any) => p.textColor && p.textColor};
  background-color: ${(p:any) => p.backgroundColor && p.backgroundColor};
`;


export const PageNotFound: React.FC<Props> = (props:any) => {
  return (
    <NotFoundContainer {...props} 
      backgroundColor={props.backgroundColor} 
      textColor={props.textColor}>
        
    {props.text && props.text}
    {props.children}
    </NotFoundContainer>
  )
};

PageNotFound.defaultProps = {
  text: "Page was not found",
  textColor: "#fff",
  backgroundColor: "#33b0d6"
}