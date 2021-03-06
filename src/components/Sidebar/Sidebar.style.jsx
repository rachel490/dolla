import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import {FaTimes} from 'react-icons/fa';


export const SidebarContainer = styled.aside`
    width: 100%;
    height: 100vh;
    position:fixed;
    z-index: 999;
    background-color: #0d0d0d;
    display: grid;
    align-items: center;
    top:0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0%')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`;


export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    cursor: pointer;
    outline: none;
    font-size: 2rem;
`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

export const SidebarWrapper = styled.div`
    color:#fff;
    
`;


export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align : center;

    @media screen and (max-width:768px) {
        grid-template-rows: repeat(6,60px);
    }

`;


export const SidebarLink = styled(LinkS)`
    color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: .2s ease-in-out;

    &:hover {
        color: #01b741;
        transition: .2s ease-in-out;
    }
`;


export const SidebarBtnWrapper = styled.div`
    display: flex;
    justify-content: center;

`;

export const SidebarRoute = styled(LinkR)`
    background-color: #01bf71;
    border-radius: 50px;
    white-space: nowrap;
    padding: 16px 64px;
    cursor: pointer;
    font-size: 16px;
    border:none;
    outline: none;
    color: #010606;
    text-decoration: none;
    transition: all .2s ease-in-out;

    &:hover {
        background-color: #fff;
        color: #01bf71;
        transition: all .2s ease-in-out;
    } 
`;


