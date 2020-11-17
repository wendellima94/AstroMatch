import React from 'react'
import Main from './Components/Main/Main'
import ResetButton from './Components/ResetButton/ResetButton'
import styled from 'styled-components';

const ContainerAstroMatch = styled.div ` 
  display: flex;
  justify-content: center;
  align-items: center;
`
const HomePage = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
`


function App(){
  return(
    <HomePage>
    <ContainerAstroMatch>
      <Main/>
    </ContainerAstroMatch>
    <ResetButton/>
    </HomePage>
    
    
  )
}

export default App