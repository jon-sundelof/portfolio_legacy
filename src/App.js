import React, { Fragment } from 'react'
import LandingPage from './components/landingpage/LandingPage'
import About from './components/about/About'

import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Chakra Petch', sans-serif;
  }

&::-webkit-scrollbar-thumb {
  height: 10px;
  background-color: #353535;
  border-radius: 5px;
}

&::-webkit-scrollbar {
  width: 10px;
  background-color: #0f0f0f;
}
`


const App = () => {
  return (
    <>
      <Fragment>
        <GlobalStyle />

        <LandingPage />


      </Fragment>
    </>
  )
}

export default App
