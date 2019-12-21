import React, {Fragment} from 'react';
import styled from 'styled-components';
import Hero from './Hero';
import { TestComponent, JustButton, NormalButton, NormalButtonWithProps } from './reactComponentLib';

const TheBtn = styled(NormalButton)`
  color: orange;
  height: 25px;
`;

const Documentation = () => {
  return (
    <Fragment>
      <Hero />
      <TestComponent text="Styled Component from React library" />
      <TheBtn text="btn"/>
      <JustButton width="200px" />
      <NormalButtonWithProps className="asd" style={{color: 'black', marginLeft: '25px', display: 'block'}}><span style={{color: 'purple'}}>Stolec</span></NormalButtonWithProps>
      <NormalButton onClick={()=>console.log('asd')} />
    </Fragment>
  )
}

export default Documentation