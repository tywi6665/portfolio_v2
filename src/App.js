import React from 'react';
import './App.scss';
import MasterContainer from './Components/Containers/MasterContainer';
import Container from './Components/Containers/Container';
import SubContainer from './Components/Containers/SubContainer';
import Navbar from "./Components/Navbar";
import Card from './Components/Card';
import Footer from './Components/Footer';

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
        <SubContainer>
          <Card />
        </SubContainer>
      </Container>
      <Footer />
    </MasterContainer>
  );
}

export default App;
