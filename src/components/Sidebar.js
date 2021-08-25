import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';

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

const SidebarNav = styled.nav`
  background: #15171c;
  width: 270px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: 'white' }}>
        <Nav>
          {<img src="/boobuy/src/images/Asset 32 - Copy.png"></img>}
        </Nav>
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
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose style={{ margin: "20px" }} onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
