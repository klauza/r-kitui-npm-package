import React, { Component } from 'react';
import styled from 'styled-components';

import { TestComponent, JustButton, NormalButton, NormalButtonWithProps } from './reactComponentLib';

const StyledDiv = styled.div`
  padding: 10px;
  background-color: blue;
  color: white;
`;
const TheBtn = styled(NormalButton)`
  color: orange;
  height: 25px;
`;

class App extends Component {
  render() {
    return (
      <div>
        <TestComponent text="Styled Component from React library" />
        <TheBtn text="btn"/>
        <JustButton width="200px" />
        <NormalButtonWithProps className="asd" style={{color: 'black', marginLeft: '25px', display: 'block'}}><span style={{color: 'purple'}}>Stolec</span></NormalButtonWithProps>
        <NormalButton onClick={()=>console.log('asd')} />
        <StyledDiv>Example App styled component</StyledDiv>
      </div>
    );
  }
}

export default App;
