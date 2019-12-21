import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  padding: 0 2.5px;
  @media(max-width: 768px){
    overflow-x: scroll;
    overflow-y  : hidden;
  }

  nav{
    display: flex;
    flex: 0 0 auto;
    align-items: center;
  }
`;

const Navbar = () => {
  return (
    <Wrapper>
      <nav>
        <Link to='/'> Main </Link>
        <Link to='/docs'> Documentation </Link>
        <Link to='/examples'> Examples </Link>
        <Link to='/projects'> Projects </Link>
        <Link to='/projects'> Projects </Link>
        <Link to='/projects'> Projects </Link>
        <Link to='/projects'> Projects </Link>
        <Link to='/projects'> Projects </Link>
      </nav>
      <div>
      FB - NPM 
      </div>
    </Wrapper>
  )
}

export default Navbar