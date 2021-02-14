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
  color: var(--primary-color);
  font-size: 30px;
  border: 2px solid var(--primary-color);
  border-radius: 2px;
  background: transparent;
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
    background-color: var(--primary-color);

    transition: transform 300ms ease-in-out;
    transform: scaleX(0);
    transform-origin: right;
  }

  &:hover{
    color: #000;
  }
  &:hover::before{
    transform: scaleX(1);
  }
  &:focus::before{
    transform: scaleX(1);
  }
  @media screen and (max-width: 1030px) {
    font-size: 20px;
    height: 35px;
    width: 110px;
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
color: var(--white);

  @media screen and (max-width: 1600px) {
    font-size: 55px;
  }
  @media screen and (max-width: 1030px) {
    font-size: 40px;
  }
  @media screen and (max-width: 765px) {
    display: none;
  }
`

export const SmallScreenWrapper = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 765px) {
    display: flex;
  }
  @media screen and (max-width: 380px) {
    font-size: 0.8rem;
  }
`

export const SmallScreenHeader = styled.h1`
    color: var(--white);
`
