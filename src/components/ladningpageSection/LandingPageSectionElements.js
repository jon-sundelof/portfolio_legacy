import styled from 'styled-components'
import { Link } from 'react-scroll';

export const AnimatedButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 100% );
  z-index: 99;
  height: 45px;
  width: 170px;

  font-family: 'Roboto', sans-serif;
  color: #fff;
  font-size: 30px;
  border: 2px solid #fff;
  background: #C3073F;
  cursor: pointer;
  outline-style: none;

  transition: color 300ms ease-in-out;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    background-color: #fff;
    /* background-color: #950740; */

    transition: transform 300ms ease-in-out;
    transform: scaleX(0);
    transform-origin: right;
  }

  &:hover{
    color: #C3073F;
  }
  &:hover::before{
    transform: scaleX(1);
  }
  &:focus::before{
    transform: scaleX(1);
  }
  
`

export const AnimatedSpan = styled.span.attrs(props => ({
  left: props.left,
  top: props.top,
  size: props.size,
  font: props.font
}))`
position: absolute;
left:  ${props => props.left};
top:  ${props => props.top};
font-size:  ${props => props.size};
font-family: ${props => props.font};
font-style: normal;
font-weight: 600;
line-height: 117px;

color: #FFFFFF;
`
