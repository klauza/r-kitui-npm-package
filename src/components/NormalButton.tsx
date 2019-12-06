import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  padding: 10px;
  color: red;
  background: ${(p:any) => p.bColor ? p.bColor : "#d4d4d4"};
`;


export const NormalButton = (props:any) => (
  <Btn {...props} bColor={props.bColor}>{props.text ? props.text : 'Just Button'}</Btn>
);
