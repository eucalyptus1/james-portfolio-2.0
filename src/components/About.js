import avatar from "../assets/images/avatar2.png";

const styles = {
  avatarStyles: {
    display: "flex",
    flexWrap: "wrap",
    width: "185px",
    height: "200px",
    borderRadius: "10px",
  },

  aboutSection: {
    color: "black",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: "100px",
  },

  aboutHeader: {
    fontSize: "30px",
    // borderBottom: "2px solid  rgb(57, 47, 199)",
    width: "fit-content",
    margin: "50px 15px",
  },

  aboutParagraph: {
    width: "400px",
    textAlign: "center",
    margin: "50px 50px",
  },
};

function About() {
  return (
    <section style={styles.aboutSection}>
      <h2 style={styles.aboutHeader}>About Me</h2>
      <img src={avatar} style={styles.avatarStyles} alt="stuff" />
      <div>
        <p style={styles.aboutParagraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          fermentum mi nec augue eleifend posuere. Fusce vitae pulvinar lectus,
          a laoreet purus. Nullam eleifend metus ac diam pretium varius.
          Phasellus luctus nunc non fermentum consequat. Etiam facilisis nunc in
          mi tincidunt mattis. Pellentesque nec lacinia ex. Nullam et ex
          egestas, porttitor massa eu, cursus erat. Integer sodales, erat at
          tempus lobortis, tellus mauris pretium neque, sit amet convallis nisl
          nulla a nibh. Suspendisse vulputate, mi sagittis varius finibus, erat
          lorem efficitur lorem, et condimentum diam lectus at metus. Donec ac
          sagittis turpis. Curabitur eu turpis sed justo hendrerit ullamcorper.
          Suspendisse eu magna sit amet ligula consectetur gravida nec nec enim.
          Nullam euismod fermentum metus elementum placerat. Mauris elementum
          convallis gravida.
        </p>
      </div>
    </section>
  );
}

export default About;
