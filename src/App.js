import React, { useState } from "react";
import "./App.scss";
import MasterContainer from "./Components/Containers/MasterContainer";
import Container from "./Components/Containers/Container";
import SubContainer from "./Components/Containers/SubContainer";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import FileWindow from "./Components/FileWindow";
import Contact from "./Components/Contact";

function App() {
  const [data, setData] = useState([
    {
      title: "Chromaticity",
      subTitle: "An experiment in D3.js",
      description:
        "A React based web application that utilizes custom designed D3.js elements and animations to generate and analyze images based on specified color and existing color palettes.",
      icons: [
        ["icons8-react-native.svg", "Built with React"],
        ["icons8-amazon-s3.svg", "Amazon Web Services/s3"],
        ["icons8-area-chart-64.png", "Data Visulization/D3.js"],
      ],
      animation: "chromaticity",
      links: [
        "https://github.com/tywi6665/Chromaticity",
        "https://chromaticity6665.herokuapp.com/",
      ],
    },
    {
      title: "Rain Or Shine",
      subTitle: "Weather Dependant CSS Art",
      description:
        "A React based weather application that combines a css landscape and a D3.js plot to convey meaningful current and future weather information in a artistic way.",
      icons: [
        ["icons8-react-native.svg", "Built with React"],
        ["icons8-area-chart-64.png", "Data Visulization/D3.js"],
        ["icons8-api-64.png", "REST API"],
      ],
      animation: "rain-or-shine",
      links: [
        "https://github.com/tywi6665/Rain-or-Shine/",
        "https://tywi6665.github.io/Rain-or-Shine/",
      ],
    },
    {
      title: "Out of This World",
      subTitle: "There's no better way to explore the solar system",
      description:
        "A React based application that uses D3.js to educate how amazing our corner of the universe is. Now go forth and explore!",
      icons: [
        ["icons8-react-native.svg", "Built with React"],
        ["icons8-area-chart-64.png", "Data Visulization/D3.js"],
        ["icons8-json-64.png", "JSON Data"],
      ],
      animation: "out-of-this-world",
      links: [
        "https://github.com/tywi6665/Out-of-This-World",
        "https://out-of-this-world.herokuapp.com/",
      ],
    },
    {
      title: "Aim-A-Hurricane",
      subTitle: "Learn how to aim a Hurricane",
      description:
        'A standalone React based drag-n-drop interaction build for The COMET Program&reg;. Learn how the interplay of competing high and low pressure systems can influence the path of hurricanes. The embedded interaction can be found the COMET module: <a href="https://www.meted.ucar.edu/hurrican/chp/navmenu.php?tab=2&page=6-1-0" target="_blank">Community Hurricane Preparedness, 2nd Edition</a>.',
      icons: [
        ["icons8-react-native.svg", "Built with React"],
        ["icons8-adobe-photoshop.svg", "Adobe Photoshop"],
      ],
      animation: "aim-a-hurricane",
      links: [
        "https://github.com/tywi6665/comet_hurricane_conversion_v2",
        "https://tywi6665.github.io/comet_hurricane_conversion_v2/",
      ],
    },
    {
      title: "Inside the Storm",
      subTitle: "Delve into the raging storm",
      description:
        'A standalone React based interaction build for The COMET Program&reg;. From the outflows to the inflows, explore the inner-workings of a hurricane. The embedded interaction can be found in the COMET module: <a href="https://www.meted.ucar.edu/hurrican/chp/navmenu.php?tab=2&page=4-1-0&type=flash" target="_blank">Community Hurricane Preparedness, 2nd Edition</a>.',
      icons: [
        ["icons8-react-native.svg", "Built with React"],
        ["icons8-adobe-photoshop.svg", "Adobe Photoshop"],
      ],
      animation: "into-the-storm",
      links: [
        "https://github.com/tywi6665/comet_into_the_storm_conversion_v2",
        "https://tywi6665.github.io/comet_into_the_storm_conversion_v2/",
      ],
    },
  ]);

  return (
    <MasterContainer>
      <Navbar />
      <Container addedClass="container-name" addedID="name-section">
        <SubContainer>
          <h1>
            I am <br /> Tyler Winstead.
          </h1>
        </SubContainer>
      </Container>
      <Container addedClass="container-card" addedID="projects-section">
        <div className="background-image background-image-1"></div>
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
      <Container addedClass="container-file-window" addedID="resume-section">
        <div className="background-image background-image-2"></div>
        <FileWindow />
      </Container>
      <Container addedClass="container-contact" addedID="contact-section">
        <div className="contact-image">
          <img src="./graphics/me.jpg" alt="me" />
        </div>
        <Contact />
      </Container>
      <Footer />
    </MasterContainer>
  );
}

export default App;
