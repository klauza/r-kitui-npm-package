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

const Documentation = (props) => {

  const {active} = props;

  return (
    <Fragment>
      <Hero />
      <Wrapper>
        <LeftPanel activePage={active} />

        <MainContent>
          {props.children}
        </MainContent>

      </Wrapper>
    </Fragment>
  )
}

export default Documentation