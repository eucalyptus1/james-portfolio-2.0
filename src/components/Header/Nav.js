import "../../index.css";

function Nav({ currentPage, handlePageChange }) {
  const styles = {
    navList: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
      listStyle: "none",
    },
    navLink: {
      color: "antiquewhite",
      padding: "10px 15px",
      textDecoration: "none",
    },
  };

  return (
    <ul style={styles.navList}>
      <li>
        <a
          href="#about"
          style={styles.navLink}
          onClick={() => handlePageChange("About")}
        >
          About Me
        </a>
      </li>
      <li>
        <a
          href="#portfolio"
          style={styles.navLink}
          onClick={() => handlePageChange("Portfolio")}
        >
          Portfolio
        </a>
      </li>
      <li>
        <a
          href="#contact"
          style={styles.navLink}
          onClick={() => handlePageChange("Contact")}
        >
          Contact
        </a>
      </li>
      {/* <li>
                <a href="#resume" onClick={() => handlePageChange('Resume')}>Resume</a>
            </li> */}
    </ul>
  );
}

export default Nav;
