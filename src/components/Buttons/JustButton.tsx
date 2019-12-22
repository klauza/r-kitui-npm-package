import React from 'react';
import styled from 'styled-components';



const Btn = styled.button<ButtonProps>`
  padding: 10px;
  color: red;
  width: ${p => p.width ? p.width : 'auto'};
  background: ${p => p.bColor ? p.bColor : "#d4d4d4"};
`;

export interface ButtonProps {
  text?: string;
  bColor?: string;
  width?: string;
}

export const JustButton: React.FC<ButtonProps> = ({ text, bColor, width }) => (
  <Btn bColor={bColor} width={width}>{text ? text : 'Just Button'}</Btn>
);
