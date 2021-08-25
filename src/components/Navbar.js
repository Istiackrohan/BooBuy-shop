import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import showSidebar from './Sidebar'

const Nav = styled.div`
  background: #15171c;
  height: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  font-size: 22px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const NavOptions = styled.div`
  font-size: 22px;
  margin-left: 10px;
  &:hover{
    background-color: rgba(255, 255, 255, 0.568);
  }
`;

function Navbar() {
    return (
        <>
            <Nav></Nav>
            <Nav style={{ height: "40px", backgroundColor: "rgb(13, 45, 49)" }}>
                <NavOptions style={{ marginLeft: "2rem" }} >
                    <NavIcon onClick={showSidebar} to='#'>
                        <FaIcons.FaBars /><span style={{ margin: "5px" }}>All</span>
                    </NavIcon>
                </NavOptions>
                <NavOptions>Hello</NavOptions>
                <NavOptions>Hi</NavOptions>
                <NavOptions>Yo</NavOptions>
            </Nav>
        </>
    )
}

export default Navbar;
