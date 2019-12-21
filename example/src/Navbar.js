import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NpmImage from './media/npm.png';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  padding: 0px 12.5px;
  background: #33b0d6;
  @media(max-width: 768px){
    overflow-x: scroll;
    overflow-y  : hidden;
  }

  nav{
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    a{
      text-decoration: none;
      color: white;
      padding: 7.5px 0px;
      margin: 0 10px;
      position: relative;
      &:not(:last-child)::after{
        content: '';
        height: 4px; width: 4px;
        border-radius: 50%;
        background: #fff;
        display: block;
        margin: 0 2px;
        position: absolute;
        top: 50%; right: -16px;
        transform: translate(-50%, -50%);
        pointer-events: none;
      }
      &:hover{
        color: #d4d4d4;
      }
    }
  }
  div{
    margin-left: 25px;
  }
  img{
    width: 40px; height: auto; object-fit: cover;
    margin-right: 12.5px;
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
      </nav>
      <div>
        <a href="https://www.npmjs.com/package/react-kitui" target="_blank" rel="noopener noreferrer"><img src={NpmImage} alt=""/></a> 
      </div>
    </Wrapper>
  )
}

export default Navbar