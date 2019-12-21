import React, {Fragment} from 'react';
import styled from 'styled-components';
import Hero from './Hero';
import { TestComponent, JustButton, NormalButton, NormalButtonWithProps } from './reactComponentLib';

const TheBtn = styled(NormalButton)`
  color: orange;
  height: 25px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const LeftPanel = styled.div`
  z-index: 10;
  position: sticky;
  top: 36px;
  /* border-top: 1px solid #fff; */
  height: calc(100vh - 36px);
  width: 20em;
  background: #33b0d6;
  color: white;
  ul{
    li{

      &:hover{
        color: black;
        background: #fff;
      }
    }
  }
`;
const MainContent = styled.div`
  width: 100%;
`;

const Documentation = () => {
  return (
    <Fragment>
      <Hero />
      <Wrapper>
        <LeftPanel>
          <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
          </ul>
        </LeftPanel>
        <MainContent>
          <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dignissimos, accusantium quas tempore at sit illum hic voluptas quod beatae est ducimus fugit modi sunt illo quaerat impedit in pariatur! Tempore neque ad quasi qui delectus ullam quibusdam dolor error minima ipsam voluptatibus magni vitae recusandae fuga quis quaerat eum cumque laborum veritatis ab a repudiandae, molestias quidem. Temporibus animi ipsam quod harum cum sint, impedit aliquam rem commodi nam aut officia repudiandae alias dolorum laboriosam saepe error expedita tenetur nulla! Sapiente, tenetur! Explicabo ex sint magnam saepe corporis laboriosam doloremque vitae placeat, consequuntur quos unde hic dicta, sit sapiente fugit, nam distinctio nobis. Cupiditate nobis cum labore aliquam quae laborum reiciendis libero earum error hic nesciunt debitis iusto, voluptas perspiciatis obcaecati atque ipsum consequuntur soluta similique, quis voluptatibus quibusdam! Asperiores, fuga. Architecto illum asperiores quibusdam pariatur est, ipsa, obcaecati dolorem soluta incidunt temporibus ea ex? Veritatis minus vel consectetur totam, nam iusto? Praesentium expedita exercitationem saepe corrupti temporibus excepturi earum. Commodi iste quasi aut, nisi perspiciatis earum delectus blanditiis numquam tempore voluptatem praesentium tenetur sint, laudantium, illo minima tempora in dolor omnis doloremque voluptate. Enim libero provident fugit minima quasi voluptatem voluptatum officia assumenda dolorem accusamus! Repudiandae, fugit deserunt.</div>
          <TestComponent text="Styled Component from React library" />
          <TheBtn text="btn"/>
          <JustButton width="200px" />
          <NormalButtonWithProps className="asd" style={{color: 'black', marginLeft: '25px', display: 'block'}}><span style={{color: 'purple'}}>Stolec</span></NormalButtonWithProps>
          <NormalButton onClick={()=>console.log('asd')} />
        </MainContent>
      </Wrapper>
    </Fragment>
  )
}

export default Documentation