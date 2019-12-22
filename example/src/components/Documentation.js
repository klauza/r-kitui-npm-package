import React, {Fragment} from 'react';
import styled from 'styled-components';
import Hero from './Hero';
import LeftPanel from './DocPages/LeftPanel';


const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const MainContent = styled.div`
  width: auto;
`;

const Documentation = () => {

  return (
    <Fragment>
      <Hero />
      <Wrapper>
        <LeftPanel />

        <MainContent>
          <h1>Documentation</h1>

          <div>Buttons: 1 2 3</div>

          <div>Carousels: 1 2 3</div>

          <div>Not Founds: 1 2 3</div>
        </MainContent>

      </Wrapper>
    </Fragment>
  )
}

export default Documentation