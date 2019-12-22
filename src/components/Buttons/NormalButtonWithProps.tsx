import React from 'react';
import styled from 'styled-components';

interface Props {
  text?: string;
  bColor?: string;
  className?: string;
  style?: any;
}

const Btn = styled.button`
  padding: 10px;
  color: red;
  background: ${(p:any) => p.bColor ? p.bColor : "#d4d4d4"};
`;


export const NormalButtonWithProps: React.FC<Props> = (props:any) => {
  return (
    <Btn {...props} bColor={props.bColor}>
      {props.text ? props.text : 'Just Button'}
      {props.children}
    </Btn>
  )
};

NormalButtonWithProps.defaultProps = {
  text: "the btn",
  bColor: "#d4d4d4"
}