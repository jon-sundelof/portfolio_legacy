import styled from 'styled-components'


export const ContentConatiner = styled.div`
  
`
export const SlideContainer = styled.div`
    display: flex;
/*     justify-content: center; */
    position: absolute;
    margin: 0 auto;
    width: 100%;
    overflow: hidden;

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
/* background: linear-gradient(to left top, var(--primary-color) 0%, var(--secondary-color) 100%); */
border-radius: 5px;
`
export const CardImg = styled.img`
width: 220px;
height: 120px;
border-radius: 5px;
box-shadow: 5px 5px 15px var(--grey);
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
height: 155px;
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