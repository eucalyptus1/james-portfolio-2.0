import Nav from "./Nav.js";

const styles = {
  headerHeader: {
    margin: "0",
    fontSize: "40px",
  },

  headerStyles: {
    backgroundColor: "rgb(57, 47, 199)",
    color: "antiquewhite",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: "20px 35px",
  },
};

function Header({ currentPage, handlePageChange }) {
  return (
    <header style={styles.headerStyles}>
      <h1 style={styles.headerHeader}>James Portfolio</h1>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  );
}

export default Header;
