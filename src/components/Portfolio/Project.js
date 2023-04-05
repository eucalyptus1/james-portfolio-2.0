// import { useState } from 'react';

import coffee from "../../assets/images/coffee.png";
import frog from "../../assets/images/frog.jpg";
import plant from "../../assets/images/plant.jpg";
import trust from "../../assets/images/trust.jpg";
import thing from "../../assets/images/untitled.png";

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
      link: "https://google.com/",
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
    <div>
      {projects.map((project) => (
        <div key={project.id}>
          <h3>{project.name}</h3>
          <a href={project.link}>
            <img src={project.image} alt="things" />
          </a>
        </div>
      ))}
    </div>
  );
}

export default Project;
