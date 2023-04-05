import Project from "./Project.js";

const styles = {
  projectContainer: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

function Portfolio() {
  return (
    <div>
      <h2>My Work</h2>
      <section style={styles.projectContainer}>
        <Project />
      </section>
    </div>
  );
}

export default Portfolio;
