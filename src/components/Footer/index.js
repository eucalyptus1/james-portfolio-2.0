import Links from "./Links.js";

const styles = {
  footerStyles: {
    backgroundcolor: " rgb(57, 47, 199)",
    color: "antiquewhite",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    height: "100px",
    // marginTop: "0",
    // marginBottom: "-10px",
    padding: "20px 35px",
  },
};

function Footer() {
  return (
    <footer style={styles.footerStyles}>
      <Links />
    </footer>
  );
}

export default Footer;
