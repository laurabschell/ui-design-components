import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const HeaderContainer = styled.div`
    background-color: #2d4386;
    margin: 0;
    display: flex;
`

const LogoBox = styled.div`
    background-color: #0f5252;
`

const LogoText = styled.p`
    background-color: hotpink;
    font-size: 2rem;
    color: #303030;
`

const SearchBar = styled.form`
    background-color: khaki;
    input {
        background-color: #948816;
        height: 2rem;
        border: 2px solid navy;
        border-radius: 2px;
    }
    button{
        background-color: #6f6405;
        border: none;
        height: 2rem;
    }
`

const UserBox = styled.p`
    background-color: #a90054;
    i {
        background-color: ivory;
    }
    h5{
        background-color: lavender;
    }
`

function Header() {
    return (
        <HeaderContainer>
            <LogoBox>
                <LogoText><strong>Fit</strong>me</LogoText>
            </LogoBox>
            <SearchBar>
                <input type="text" placeholder="Search..."/>
                <button type="submit"><i className="fa fa-search"></i></button>
            </SearchBar>
            <UserBox>
                <i></i>
                <h5>Matías Fernández</h5>
                <i className="fas fa-caret-up"></i>
            </UserBox>
        </HeaderContainer>
    )
}

export default Header
