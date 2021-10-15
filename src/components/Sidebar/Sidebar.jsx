import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarBtnWrapper,
    SidebarRoute
} from './Sidebar.style';

const Sidebar = ({ toggle, isOpen }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon onClick={toggle}></CloseIcon>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
                    <SidebarLink to='discover' onClick={toggle}>Discover</SidebarLink>
                    <SidebarLink to='services' onClick={toggle}>Services</SidebarLink>
                    <SidebarLink to='signup' onClick={toggle}>Sign Up</SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrapper>
                    <SidebarRoute to='/signin' onClick={toggle}>Sign In</SidebarRoute>
                </SidebarBtnWrapper>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
