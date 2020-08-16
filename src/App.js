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
      title: "Chromaticity",
      subTitle: "An experiment in D3.js",
      description: "A React based web application that utilizes custom designed D3.js elements and animations to generate and analyze images based on specified color and existing color palettes.",
      icons: [["icons8-react-native", "Built with React"], ["icons8-amazon-s3", "Amazon Web Services/s3"]],
      animation: "",
      links: ["https://github.com/tywi6665/Chromaticity", "https://chromaticity6665.herokuapp.com/"]
    },
    {
      title: "Card Title",
      subTitle: "",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis tortor nulla. Sed varius magna felis, eu tempus justo mattis a. Nunc ultrices fringilla eros sit amet efficitur. Pellentesque vitae sollicitudin tortor. Mauris aliquam euismod sem quis malesuada. Fusce vestibulum placerat vulputate.",
      icons: [["icons8-react-native", "React Popover"], ["icons8-react-native", "React Popover"]],
      animation: "",
      links: ["", ""]
    },
    {
      title: "Card Title",
      subTitle: "",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis tortor nulla. Sed varius magna felis, eu tempus justo mattis a. Nunc ultrices fringilla eros sit amet efficitur. Pellentesque vitae sollicitudin tortor. Mauris aliquam euismod sem quis malesuada. Fusce vestibulum placerat vulputate.",
      icons: [["icons8-react-native", "React Popover"], ["icons8-react-native", "React Popover"]],
      animation: "",
      links: ["", ""]
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
              subTitle={data.subTitle}
              description={data.description}
              icons={data.icons}
              animation={data.animation}
              links={data.links}
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
