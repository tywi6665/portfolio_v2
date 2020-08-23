import React, { useState } from 'react';
import './App.scss';
import MasterContainer from './Components/Containers/MasterContainer';
import Container from './Components/Containers/Container';
import SubContainer from './Components/Containers/SubContainer';
import Navbar from "./Components/Navbar";
import Card from './Components/Card';
import Footer from './Components/Footer';
import FileWindow from './Components/FileWindow';
import Contact from './Components/Contact';

function App() {

  const [data, setData] = useState([
    {
      title: "Chromaticity",
      subTitle: "An experiment in D3.js",
      description: "A React based web application that utilizes custom designed D3.js elements and animations to generate and analyze images based on specified color and existing color palettes.",
      icons: [["icons8-react-native.svg", "Built with React"], ["icons8-amazon-s3.svg", "Amazon Web Services/s3"], ["icons8-area-chart-64.png", "Data Visulization/D3.js"]],
      animation: "",
      links: ["https://github.com/tywi6665/Chromaticity", "https://chromaticity6665.herokuapp.com/"]
    },
    {
      title: "Rain Or Shine",
      subTitle: "Weather Dependant CSS Art",
      description: "A React based weather application that combines a css landscape and a D3.js plot to convey meaningful current and future weather information in a artistic way.",
      icons: [["icons8-react-native.svg", "Built with React"], ["icons8-area-chart-64.png", "Data Visulization/D3.js"], ["icons8-api-64.png", "REST API"]],
      animation: "rain-or-shine",
      links: ["https://github.com/tywi6665/Rain-or-Shine/", "https://tywi6665.github.io/Rain-or-Shine/"]
    },
    {
      title: "Out of This World",
      subTitle: "There's no better way to explore the solar system",
      description: "A React based application that uses D3.js to educate how amazing our corner of the universe is. Now go forth and explore!",
      icons: [["icons8-react-native.svg", "Built with React"], ["icons8-area-chart-64.png", "Data Visulization/D3.js"], ["icons8-json-64.png", "JSON Data"]],
      animation: "",
      links: ["https://github.com/tywi6665/Out-of-This-World", "https://out-of-this-world.herokuapp.com/"]
    },
    {
      title: "Portfolio 1.0",
      subTitle: "My first portfolio",
      description: "",
      icons: [["icons8-react-native.svg", "Built with React"], ["icons8-area-chart-64.png", "Data Visulization/D3.js"]],
      animation: "",
      links: ["https://github.com/tywi6665/Portfolio", "https://tywi6665.herokuapp.com/main"]
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
      <Container
        addedClass="container-contact"
      >
        <Contact />
      </Container>
      <Footer />
    </MasterContainer>
  );
}

export default App;
