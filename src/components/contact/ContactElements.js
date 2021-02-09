import styled from 'styled-components'

export const ContactContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`

export const ContactFormCon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

`

export const ContactHeader = styled.h2`
    color: var(--secondary-color);
    font-size: 4rem;
    transition: 1s ease;
    @media screen and (max-width: 1000px) {
        font-size: 2.8rem;
  }
    @media screen and (max-width: 400px) {
        font-size: 1.7rem;
  }
`

export const Form = styled.form`
 display: flex;
 flex-direction: column;
 justify-content: space-around;
 align-content: space-around;
 width: 30%;
 height: 50%;
 
 @media screen and (max-width: 1000px) {
        width: 55%;
  }

`
export const Input = styled.input`
    background: transparent;
    height: 4.5vh;
    border-radius: 5px;
    font-size: 1.2rem;
    font-family: 'Roboto', sans-serif;
    color: var(--white);
    @media screen and (max-width: 1000px) {
        font-size: 1rem;
        height: 3vh;
  }
    ::placeholder{
        display: flex;
        align-items: center;
        font-size: 1.2rem;
        font-family: 'Roboto', sans-serif;
        color: var(--white);
    }
  border: 1px solid var(--white);;
  -webkit-text-fill-color: var(--white);
  -webkit-box-shadow: 0 0 0px 1000px #000 inset;
  transition: background-color 5000s ease-in-out 0s;

`
export const Message = styled.textarea`
    background: transparent;
    height: 20vh;
    border-radius: 5px;
    resize: none;
    font-size: 1.2rem;
    font-family: 'Roboto', sans-serif;
    color: var(--white);
    border: 1px solid var(--white);;

    ::placeholder{
        display: flex;
        align-items: center;
        font-size: 1.2rem;
        font-family: 'Roboto', sans-serif;
        color: var(--white);
    }
`

export const SendMessageBtn = styled.button`
    background: none;
    color: var(--white);
    font-size: 1.2rem;
    font-family: 'Roboto', sans-serif;
    border: 1px solid var(--white);
    border-radius: 3px;
    height: 5.5vh;
`