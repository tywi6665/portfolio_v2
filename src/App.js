import React from 'react';
import './App.scss';
import MasterContainer from './Components/Containers/MasterContainer';
import Container from './Components/Containers/Container';
import SubContainer from './Components/Containers/SubContainer';
import Navbar from "./Components/Navbar";

function App() {
  return (
    <MasterContainer>
      <Navbar />
      <Container
        addedClass="container-name"
      >
        <SubContainer>
          <h1>I am <br /> Tyler Winstead.</h1>
        </SubContainer>
      </Container>
      <Container>

      </Container>
    </MasterContainer>
  );
}

export default App;
