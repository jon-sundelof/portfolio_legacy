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
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
`

export const TextContent = styled.p`
    z-index: 99;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    text-align: center;
    max-width: 640px;
    font-size: 18px;
    color: var(--grey);
    `
export const BoldSpan = styled.span`
    font-family: 'Chakra Petch', sans-serif;
    font-weight: 700;
    font-size: 22px;
    color: var(--white);
`

export const AboutImg = styled.img`
    z-index: 0;
/*     position: absolute; */
    width: 20%;
    border-radius: 3px;
`

export const TextSpan = styled.span`
    position: absolute;
    top: 138%;
    right: -20%;
    font-size: 30px;
    -webkit-transform: rotate(90deg);
    -webkit-transform-origin: left top;
    font-weight: 700;
    color: var(--primary-color);

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

export const AnimatedScroll = styled.span`
/*     position: absolute; */
/*     top: 150%;
    left: 50%; */
    z-index: 9999;
    width: 35px;
    height: 35px;
    margin-left: -12px;
    border-left: 4px solid var(--white);
    border-bottom: 4px solid var(--white);
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
    color: var(--primary-color);
   `
export const ScrollBtnCon = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 999;
    margin-top: 0;
   /*  width: 450px; */
    height: 100px;
    cursor: pointer;
   `

