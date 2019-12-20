import React, { Component } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

import { TestComponent, JustButton, NormalButton, NormalButtonWithProps } from './reactComponentLib';

const Content = styled.div`
  width: 100%;
  height: 100%;
`;
const LeftBar = styled.div`
  width: 100%;
  min-height: 100vh; 
  border-right: 1px solid #000;
`;
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
      <>
      <Navbar />
      <div style={{display: "grid", gridTemplateColumns: "1fr 5fr"}}>
        <LeftBar>
          Left bar
        </LeftBar>
        <Content>
          <TestComponent text="Styled Component from React library" />
          <TheBtn text="btn"/>
          <JustButton width="200px" />
          <NormalButtonWithProps className="asd" style={{color: 'black', marginLeft: '25px', display: 'block'}}><span style={{color: 'purple'}}>Stolec</span></NormalButtonWithProps>
          <NormalButton onClick={()=>console.log('asd')} />
          <StyledDiv>Example App styled component</StyledDiv>
        </Content>
      </div>
      </>
    );
  }
}

export default App;
