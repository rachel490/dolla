import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
  background-color: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -80px;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  padding: 0 24px;
  max-width: 1100px; //padding을 이렇게도 줄 수 있군..
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 24px;
  justify-self: flex-start;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    color: #fff;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  margin-right: -22px;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLink = styled(LinkS)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  height: 100%;
  cursor: pointer;
  padding: 0 1rem;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  background-color: #01bf71;
  padding:10px 22px;
  font-size: 16px;
  border-radius: 50px;
  white-space: nowrap;
  color: #010606;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  border: none;
  transition: all .2s ease-in-out;

  &:hover {
      transition:all .2s ease-in-out;
      background-color: #fff;
      color: #010606;
  }
`;
