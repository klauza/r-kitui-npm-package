import React,{ useState, useEffect } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Panel = styled.div`
  z-index: 10;
  position: sticky;
  top: 36px;
  /* border-top: 1px solid #fff; */
  height: calc(100vh - 36px);
  width: 20em;
  background: #33b0d6;
  color: white;
  ul{
    margin: 0 25px;
    li{

      &:hover{
        color: black;
        background: #fff;
        cursor: pointer;
      }
    }
  }
  div, a{
    color: white;
    text-decoration: none;
    display: block;
    cursor: pointer;
    &:hover{
      color: grey;
    }
  }
`;

const LeftPanel = ({activePage}) => {

  const [isOpen, setIsOpen] = useState({
    buttons: false, 
    carousels: false, 
    not_founds: false
  });
  useEffect(()=>{

    // if(activePage !== 'undefined') setIsOpen(activePage);
    if(activePage) setIsOpen(prevState => ({...prevState, [activePage]: true } ));
  }, [activePage])

  const [lastOpen, setLastOpen] = useState('');

  const handleOpen = (e) => {
    const targ = e.target.dataset.open;

    if(targ === lastOpen) return

    setIsOpen(prevState => ({...prevState, [targ]: true, [lastOpen]: false }) );

    setLastOpen(targ);
  }

  return (
    <Panel>
      <ul>
        <Link to="/docs/buttons" data-open="buttons" onClick={handleOpen}>Buttons</Link>
        {isOpen.buttons 
          ? 
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
          :
          (null)
        }
        <Link to="/docs/carousels" data-open="carousels" onClick={handleOpen}>Carousels</Link>
        {isOpen.carousels 
          ? 
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
          :
          (null)
        }
        <Link to="/docs/not-founds" data-open="not_founds" onClick={handleOpen}>Not_Founds</Link>
        {isOpen.not_founds 
          ? 
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
          :
          (null)
        }

      </ul>
    </Panel>
  )
}

export default LeftPanel
