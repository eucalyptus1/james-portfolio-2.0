// import { useState } from 'react';

import coffee from "../../assets/images/coffee.png";
import frog from "../../assets/images/frog.jpg";
import plant from "../../assets/images/plant.jpg";
import trust from "../../assets/images/trust.jpg";
import thing from "../../assets/images/untitled.png";

const styles = {
  projectContainer: {
    display: "flex",
    flexWrap: "wrap",
    margin: "50px",
    justifyContent: "space-between",
    alignItems: "center",
  },

  projectStyles: {
    height: "190px",
    width: "185px",
    margin: "10px 20px",
    borderStyle: "solid",
    borderWidth: "4px",
    borderRadius: "10px",
    overflow: "hidden",
  },

  projectTitle: {
    color: "antiquewhite",
    backgroundColor: "rgb(57, 47, 199)",
    position: "absolute",
    borderRadius: "4px",
  },

  projectImage: {
    width: "100%",
    height: "100%",
  },
};

function Project() {
  const projects = [
    {
      id: 1,
      name: "Zoom Bingo",
      image: trust,
      link: "https://mighty-refuge-69635.herokuapp.com/",
    },
    {
      id: 2,
      name: "Plant Measurer",
      image: plant,
      link: "https://eucalyptus1.github.io/dasher-weathboard/",
    },
    {
      id: 3,
      name: "Coffee Management",
      image: coffee,
      link: "https://google.com/",
    },
    {
      id: 4,
      name: "Frog exaggerator",
      image: frog,
      link: "https://google.com/",
    },
    {
      id: 5,
      name: "The App",
      image: thing,
      link: "https://google.com/",
    },
  ];

  // const [projects] = useState([
  //     {
  //       name: 'Zoom Bingo',
  //       image: {trust},
  //       link: 'https://mighty-refuge-69635.herokuapp.com/'
  //     },
  //     {
  //       name: 'Plant Measurer',
  //       image: {plant},
  //       link: 'https://google.com/'
  //     },
  //     {
  //       name: 'Coffee Management',
  //       image: {coffee},
  //       link: 'https://google.com/'
  //     },
  //     {
  //       name: 'Frog exaggerator',
  //       image: {frog},
  //       link: 'https://google.com/'
  //     },
  //     {
  //       name: 'The App',
  //       image: {thing},
  //       link: 'https://google.com/'
  //     }
  //   ]);

  // const [currentProject, setCurrentProject] = useState(projects[0]);

  // const handleProject = (project) => setCurrentProject(project);

  return (
    <div style={styles.projectContainer}>
      {projects.map((project) => (
        <div style={styles.projectStyles} key={project.id}>
          <h3 style={styles.projectTitle}>{project.name}</h3>
          <a href={project.link}>
            <img src={project.image} style={styles.projectImage} alt="things" />
          </a>
        </div>
      ))}
    </div>
  );
}

export default Project;
