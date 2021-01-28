import styled from 'styled-components'

export const Nav = styled.nav`
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;

    background: #000;
`
export const NavItemsContainer = styled.div`
`

export const List = styled.ul`
    width: 40vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    list-style: none;
`

export const NavItems = styled.li`
    font-family: 'Roboto', sans-serif;
    z-index: 99;
    font-size: 22px;
    color: #fff;
    :hover {
        cursor: pointer;
    }
`