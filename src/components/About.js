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
          A passionate, detail oriented full stack web developer who began his
          journey tinkering with MS-DOS commands on his first computer, to
          Thomas' Myspace Editor and ultimately graduating one of America's top
          coding schools with really good grades. I am proficient and well
          versed in many aspects of web development, from HTML, CSS and even
          javascript. Feel free to browse through the many projects below to see
          for yourself! I look forward to working with you!
        </p>
      </div>
    </section>
  );
}

export default About;
