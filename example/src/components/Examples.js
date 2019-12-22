import React from 'react'
import styled from 'styled-components';
import { TestComponent, JustButton, NormalButton, NormalButtonWithProps } from '../reactComponentLib';

const TheBtn = styled(NormalButton)`
  color: orange;
  height: 25px;
`;

const Examples = () => {
  return (
    <div style={{marginTop: '100px'}}>
      <TestComponent text="Styled Component from React library" />
      <TheBtn text="btn"/>
      <JustButton width="200px" />
      <NormalButtonWithProps className="asd" style={{color: 'black', marginLeft: '25px', display: 'block'}}><span style={{color: 'purple'}}>Stolec</span></NormalButtonWithProps>
      <NormalButton onClick={()=>console.log('asd')} />
    </div>
  )
}

export default Examples
