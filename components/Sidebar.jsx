import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const SidebarContainer = styled.div`
    background-color: beige;
`

const StyledUL = styled.ul`
    background-color: #2d8686;
    margin: 0;
    display: flex;
`

const StyledLI = styled.li`
    background-color: #18c4c4;
`

function Sidebar() {
    return (
        <SidebarContainer>
            <StyledUL>
                <StyledLI>
                    <Link href="/">Home</Link>
                </StyledLI>
                <StyledLI>
                    <Link href="/about">About</Link>
                </StyledLI>
                <StyledLI>
                    <Link href="/contact">Contact</Link>
                </StyledLI>
            </StyledUL>
        </SidebarContainer>
    )
}

export default Sidebar
