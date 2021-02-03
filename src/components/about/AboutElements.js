import styled, { keyframes } from 'styled-components'
import { Link } from 'react-scroll';


export const ContentConatiner = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;

`
export const FlexRow = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
 /*    height: 100%; */
`

export const TextContent = styled.p`
    font-family: 'Roboto', sans-serif;
    max-width: 740px;
    font-size: 29px;
    color: #fff;
    `

export const AboutImg = styled.img`
    z-index: 999;
    width: 35%;
`

export const TextSpan = styled.span`
    position: absolute;
    z-index: 999;
    top: 109%;
    left: 10%;
    -webkit-transform: rotate(90deg);
    -webkit-transform-origin: left top;
    
    padding: 10px;
    font-weight: 700;
    color: #C3073F;
    font-size: 34px;
         &:hover ${AboutImg} {
        color: black;
  }

`

const rotate = keyframes`
   0%, 100%{
      transform: rotateX(0%);
        }
    50 % {
        transform:  rotateX(15%);
    }
  `

const animaterot = keyframes`
    0%,100%{
        transform: rotateY(720deg);
    }
    50%{
        transform: rotateY(0deg);
    }
  `
const sdb06 = keyframes`
   0% {
    -webkit-transform: rotateY(0) rotateZ(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    -webkit-transform: rotateY(720deg) rotateZ(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
  `

export const AnimatedScroll = styled(Link)`
/*     position: absolute; */
/*     top: 150%;
    left: 50%; */
    z-index: 9999;
    width: 35px;
    height: 35px;
    margin-left: -12px;
    border-left: 4px solid #fff;
    border-bottom: 4px solid #fff;
    -webkit-transform: rotateZ(-45deg);
    transform: rotateZ(-45deg);
    animation: ${animaterot} 2s infinite, ${rotate} 2s infinite;
    -webkit-animation: ${sdb06} 1.5s infinite;
    box-sizing: border-box;

    :hover {
        cursor: pointer;
        }
   `

export const ScrollText = styled.span`
    font-size: 2rem;
    color: #C3073F;
   `
export const ScrollBtnCon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 999;
    margin-top: 0;
   /*  width: 450px; */
    height: 100px;
   `

