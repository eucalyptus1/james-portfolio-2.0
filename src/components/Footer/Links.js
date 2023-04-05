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
      <li style={styles.footerLinks}>LinkedIN</li>
      <li style={styles.footerLinks}>Github</li>
    </ul>
  );
}

export default Links;
