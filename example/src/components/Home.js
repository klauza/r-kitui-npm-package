import React, {Fragment} from 'react';
import styled from 'styled-components';
import Hero from './Hero';

const Wrapper = styled.div`
  display: flex; flex-direction: column;
  justify-content: center;
  /* align-items: flex-start; */
  width: 60em;
  max-width: 100%;
  padding: 0 10px;
  margin: 0 auto;

  h2{
    margin-top: 25px;
    text-align: center;
  }
  ul > li{
    list-style: inside;
  }
`
const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Wrapper>
        <h2>Guide</h2>
        <p style={{textAlign: 'center', textDecoration: 'underline'}}>Follow this guide to quickly set up this package into your project</p>

        <div>
          <p>
            <strong>I.</strong> 
            First step is to install and set up local environment, skip this step if you already created your React project.
            <ul>
              <li>Download node.js from <a href="#">here</a> and install it.</li>
              <li>Get any code editor. Recommended and the most popular is Visual Studio Code, you can grab one from <a href="#">here</a>.</li>
              <li>If you didn't <i style={{fontFamily: 'monospace'}}>npm create-react-app</i> yet, go for it and create a new React project.</li>
            </ul>
          </p>
        </div>

        <div>
        <p>
          <strong>II.</strong>
          step is to 
        </p>
        </div>

        install node js
        and code editor
        then you may proceed for further steps of installation

        <strong>peer dependencies</strong>
        In order to use that package, you need to have installed styled-components in your projects
        <strong style={{fontFamily: 'monospace'}}><i>npm i styled-components --save</i></strong>
        
      </Wrapper>
    </Fragment>
  )
}

export default Home
