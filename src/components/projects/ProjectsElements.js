import styled, { keyframes } from 'styled-components'


export const ContentConatiner = styled.div`
  
`
export const SlideContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 60%;
    height: 100%;


`

export const CardContainer = styled.div`
    position: relative;
    height: 50%;
    max-width: 900px;
    margin: 0 auto;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;

    transition: transform 800ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
/*     transition: 1s ease-in-out; */

    /* border: 5px solid var(--white); */
`

export const Card = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    
    opacity: 0.3;
    height: 420px;
    width: 220px;
    z-index: 9999;
 /*    margin-bottom: 15px; */
    margin-left: 20px;
    margin-right: 20px;
    padding: 20px;
    border-radius: 15px;
    background: var(--white);
/*     transition: transform 100ms cubic-bezier(0.455, 0.03, 0.515, 0.955); */
    transform: translateX(${props => props.translate}px);
    transition: 500ms ease-in-out;
    ${({ active }) => active && `
    opacity: 1;
  `}
  

`
export const Circle = styled.div`
display: flex;
z-index: 999;
justify-content: center;
align-items: center;
width: 250px;
max-height: 200px;
background: linear-gradient(to left top, var(--primary-color) 0%, var(--secondary-color) 100%);
border-radius: 5px;
`
export const CardImg = styled.img`
margin-top: 0;
width: 255px;
height: 135px;
border-radius: 5px;
box-shadow: 0px 5px 5px rgba(0,0,0, 0.4);
`

export const CardHeader = styled.h2`
/*   font-family: 'Roboto', sans-serif; */
color: var(--primary-color);
font-size: 24px;
font-weight: 700;
`

export const CardText = styled.p`
font-family: 'Roboto', sans-serif;
z-index: 999;
max-width: 240px;
max-height: 143px;
min-height: 143px;
font-size: 14px;
font-weight: 300;
`
export const SvgsContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-evenly;
flex-direction: row;
z-index: 999;
`

export const SvgIcon = styled.img`
z-index: 999;
width: 50px;
height: 50px;
cursor: pointer;
`

export const SlideBtn = styled.button`
z-index: 9999;
color: #fff;
width: 150px;
height: 150px;
background-color: red;
`


const right = keyframes`
   0% {
    -webkit-transform:  rotateZ(225deg) translate(0, 0);
    opacity: 0.8;
  }
  50% {
    -webkit-transform: rotateZ(225deg) translate(-15px, 15px);
    opacity: 1;
  }
  100% {
    -webkit-transform:  rotateZ(225deg) translate(0, 0);
    opacity: 0.8;
  }
  `

export const AnimatedScrollRight = styled.span`
 /*    position: absolute; */
    left: ${props => props.left};
    width: 55px;
    height: 55px;
    margin-left: -12px;
    border-left: 12px solid var(--white);
    border-bottom: 12px solid var(--white);
    border-radius: 10%;
    animation: ${right} 3s infinite ease-in-out;
    -webkit-animation: ${right} 3s infinite ease-in-out;

    :hover {
    cursor: pointer;
}
`
const left = keyframes`
   0% {
    -webkit-transform:  rotateZ(45deg) translate(0, 0);
    opacity: 0.8;
  }
  50% {
    -webkit-transform: rotateZ(45deg) translate(-15px, 15px);
    opacity: 1;
  }
  100% {
    -webkit-transform:  rotateZ(45deg) translate(0, 0);
    opacity: 0.8;
  }
  `

export const AnimatedScrollLeft = styled.span`
 /*    position: absolute; */
    left: ${props => props.left};
    width: 55px;
    height: 55px;
    margin-left: -12px;
    border-left: 12px solid var(--white);
    border-bottom: 12px solid var(--white);
    border-radius: 10%;
    animation: ${left} 3s infinite ease-in-out;
    -webkit-animation: ${left} 3s infinite ease-in-out;

    :hover {
    cursor: pointer;
}
`

