import React from 'react';
import './App.scss';
import MasterContainer from './Components/Containers/MasterContainer';
import Container from './Components/Containers/Container';
import SubContainer from './Components/Containers/SubContainer';

function App() {
  return (
    <MasterContainer>
      <Container>
        <SubContainer>
          <h1>Tyler Winstead</h1>
        </SubContainer>
      </Container>
    </MasterContainer>
  );
}

export default App;
