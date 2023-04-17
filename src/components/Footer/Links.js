const styles = {
  footerList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    listStyle: "none",
  },

  footerLinks: {
    padding: "10px 15px",
    color: "antiquewhite",
    textDecoration: "none",
  },
};

function Links() {
  return (
    <ul style={styles.footerList}>
      <li style={styles.footerLinks}>
        <a href="www.linkedin.com/in/james-harrington-03a36160">LinkedIN</a>
      </li>
      <li style={styles.footerLinks}>
        <a href="https://github.com/eucalyptus1">Github</a>
      </li>
    </ul>
  );
}

export default Links;
