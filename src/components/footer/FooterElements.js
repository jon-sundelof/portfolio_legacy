import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll';


export const FooterWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
`

export const FooterWrapInner = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 8px auto;
    background-color: var(--primary-color);
    width: 98%;
    height: 75%;
 /*    @media screen and (max-width: 1000px) {
        justify-content: flex-start;
  } */

`

export const SocialLinksWrapper = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-evenly;
    @media screen and (max-width: 1000px) {
        width: 65%;
  }
`

export const Link = styled.a`
  /*   transition: all .3s ease-out;
    border-bottom:solid transparent 5px; */
    a:visited {color:#000;} 
`

export const SocialLinks = styled.span`
font-family: 'Roboto', sans-serif;
font-weight: bold;
font-size: 2rem;
cursor: pointer;
::after {
    content: '';
    display: block;
    width: 0;
    height: 4px;
    background: #000;
    transition: width .7s;
    @media screen and (max-width: 1000px) {
        height: 2px;
  }
}

:hover::after {
    width: 100%;
    //transition: width .3s;
}
@media screen and (max-width: 1000px) {
        font-size: 1.1rem;
  }
`


export const RightPlacedWrapper = styled.div`
    position: absolute;
    display: flex;
    justify-content: space-evenly;
    width: 22%;
    right: 5%;
    @media screen and (max-width: 1000px) {
        width: 50%;
        top: 15%;
        right: 25%;
        font-weight: bold;
  }
    
    
`

export const RightLink = styled(LinkS)`
    cursor: pointer;
    transition: 1s ease-in-out;
    @media screen and (max-width: 1000px) {
        font-size: 0.8rem;
  }
  :hover {
        letter-spacing: 0.11rem;
    }
`
export const RightSpan = styled.span`
    cursor: pointer;
    transition: 1s ease-in-out;
    @media screen and (max-width: 1000px) {
        font-size: 0.8rem;
  }
  :hover {
        letter-spacing: 0.11rem;
    }
`
