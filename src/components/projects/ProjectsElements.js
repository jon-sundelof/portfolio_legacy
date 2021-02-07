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
    height: 100%;
    max-width: 1000px;
    margin: 0 auto;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Card = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    filter: blur(3px);
    opacity: 0.3;
    height: 420px;
    width: 220px;
    z-index: 9999;
    margin-left: 20px;
    margin-right: 20px;
    padding: 20px;
    border-radius: 15px;
    background: var(--white);


    transform: translateX(${props => props.translate}px);
    transition: ${props => props.slideTransition} ease-in-out;
    ${({ active }) => active && `
    transition: ${props => props.slideTransition} ease-in-out;
    filter: blur(0);
    opacity: 1;
    height: 500px;
    width: 300px;
  `}
  

`

export const CardImg = styled.img`
position: absolute;
top: 0;
/* width: 260px; */
width: 100%;
height: 135px;
border-radius: 15px 15px 0 0;
/* border-radius: 5px; */
/* border-bottom: 5px solid var(--primary-color); */
box-shadow: 0px 5px 5px rgba(0,0,0, 0.4);
transition: ${props => props.slideTransition} ease-in-out;
${({ active }) => active && `
    height: 185px;
  `}
`

export const CardHeader = styled.h2`
/*   font-family: 'Roboto', sans-serif; */
position: relative;
top: 22%;
color: var(--primary-color);
font-size: 24px;
font-weight: 700;
transition: ${props => props.slideTransition} ease-in-out;
${({ active }) => active && `
    font-size: 32px;
  `}
`

export const CardText = styled.p`
text-align: center;
position: relative;
top: 8%;
font-family: 'Roboto', sans-serif;
z-index: 999;
max-width: 275px;
max-height: 23px;
min-height: 143px;
font-size: 14px;
font-weight: 300;
transition: ${props => props.slideTransition} ease-in-out;
${({ active }) => active && `
    height: 185px;
    max-width: 290px;
    font-size: 18px;
  `}
`
export const SvgsContainer = styled.div`
position: relative;
top: 8%;
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

