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
    margin: 0 auto;
  .content{
    width: 50em;
    max-width: 100%;
  }
`;

const DocReusable = (props) => {

  const {active} = props;

  return (
    <Fragment>
      <Hero />
      <Wrapper>
        <LeftPanel activePage={active} />

        <MainContent>
          <div className="content">
            {props.children}
          </div>
        </MainContent>

      </Wrapper>
    </Fragment>
  )
}

export default DocReusable