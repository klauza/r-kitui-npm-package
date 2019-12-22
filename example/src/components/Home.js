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
  .install-step{
    margin: 25px 0;
  }
  ul > li{
    list-style: inside;
  }
  .npm-save{
    background: lightgrey;
    border-radius: 5px;
    padding: 0 5px;
    font-family: monospace, sans-serif;
  }
`
const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Wrapper>
        <h2>Guide</h2>
        <p style={{textAlign: 'center', textDecoration: 'underline'}}>Follow this guide to quickly set up this package into your project</p>

        <div className="install-step">
          <p>
            <strong>I. </strong> 
            First step is to install and set up local environment, skip this step if you already created your React project.
            <ul>
              <li>Download node.js from <a href="https://nodejs.org/en/">here</a> and install it.</li>
              <li>Get any code editor. Recommended and the most popular is Visual Studio Code, you can grab one from <a href="https://code.visualstudio.com/">here</a>.</li>
              <li>If you didn't <span className="npm-save">npm create-react-app</span> yet, go for it and create a new React project.</li>
            </ul>
          </p>
        </div>

        <div className="install-step">
          <p>
            <strong>II. </strong>
            Assuming React is already implemented in your project, we can now install package peer dependencies:
            <ul>
              <li><span className="npm-save">npm install styled-components --save</span></li>
            </ul>
          </p>
        </div>

        <div className="install-step">
          <p>
            <strong>III. </strong>
            Last but not least is to install react-kitui package
            <ul>
              <li><span className="npm-save">npm install react-kitui --save</span></li>
            </ul>
          </p>
        </div>

      </Wrapper>
    </Fragment>
  )
}

export default Home
