import React, { useState } from 'react';
import './App.scss';
import MasterContainer from './Components/Containers/MasterContainer';
import Container from './Components/Containers/Container';
import SubContainer from './Components/Containers/SubContainer';
import Navbar from "./Components/Navbar";
import Card from './Components/Card';
import Footer from './Components/Footer';
import FileWindow from './Components/FileWindow';

function App() {

  const [data, setData] = useState([
    {
      title: "Card Title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis tortor nulla. Sed varius magna felis, eu tempus justo mattis a. Nunc ultrices fringilla eros sit amet efficitur. Pellentesque vitae sollicitudin tortor. Mauris aliquam euismod sem quis malesuada. Fusce vestibulum placerat vulputate.",
      icons: [["icons8-react-native", "React Popover"], ["icons8-react-native", "React Popover"]],
      animation: ""
    },
    {
      title: "Card Title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis tortor nulla. Sed varius magna felis, eu tempus justo mattis a. Nunc ultrices fringilla eros sit amet efficitur. Pellentesque vitae sollicitudin tortor. Mauris aliquam euismod sem quis malesuada. Fusce vestibulum placerat vulputate.",
      icons: [["icons8-react-native", "React Popover"], ["icons8-react-native", "React Popover"]],
      animation: ""
    },
    {
      title: "Card Title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis tortor nulla. Sed varius magna felis, eu tempus justo mattis a. Nunc ultrices fringilla eros sit amet efficitur. Pellentesque vitae sollicitudin tortor. Mauris aliquam euismod sem quis malesuada. Fusce vestibulum placerat vulputate.",
      icons: [["icons8-react-native", "React Popover"], ["icons8-react-native", "React Popover"]],
      animation: ""
    }
  ])

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
      <Container
        addedClass="container-card"
      >
        {data.map((data, i) => (
          <SubContainer key={i}>
            <Card
              title={data.title}
              description={data.description}
              icons={data.icons}
              animation={data.animation}
            />
          </SubContainer>
        ))}
      </Container>
      <Container
        addedClass="container-file-window"
      >
        <FileWindow />
      </Container>
      <Footer />
    </MasterContainer>
  );
}

export default App;
