import styled from 'styled-components'
import { Link } from 'react-scroll';


export const Nav = styled.nav`
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    position: sticky;
    z-index: 99999;
    top: 0;

    background: none;
`
export const NavItemsContainer = styled.div`
`

export const List = styled.ul`
    width: 40vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    list-style: none;

    @media screen and (max-width: 1500px){
        width: 70vw;
    }
    @media screen and (max-width: 800px){
        width: 95vw;
    }
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItems = styled(Link)`
    display: flex;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    z-index: 99;
    width: 110px;
    height: 32px;
    font-size: 22px;
    color: var(--white);
    text-shadow: 5px 5px 5px #000;
  /*   border-bottom: 4px solid rgba(195, 7, 63, 0); */
   /*  transition: 1s ease-in; */

    @media screen and (max-width: 1300px){
        font-size: 16px;   
    }
    
    cursor: pointer;
    
    &.active {
        border-bottom: 4px solid var(--primary-color);
    }
`


export const MobileIcon = styled.div`
    /* display: none; */
    display: ${({ isOpen }) => (isOpen ? 'none' : 'block')};
    @media screen and (max-width: 768px) {
        display: ${({ isOpen }) => (isOpen ? 'none' : 'block')};
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;