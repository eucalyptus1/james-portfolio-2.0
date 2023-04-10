const styles = {
  formPage: {
    textAlign: "center",
    maxWidth: "300px",
    margin: "20px auto",
  },

  formStyles: {
    border: "1px solid lightgray",
    borderRadius: "10px",
    padding: "20px",
  },

  boxStyles: {
    height: "350px",
    width: "230px",
  },
};

function Contact() {
  return (
    <div>
      <h2>Contact Me</h2>

      <div style={styles.formPage}>
        <form className="form" style={styles.formStyles}>
          <input
            //   value={email}
            name="email"
            //   onChange={handleInputChange}
            type="email"
            placeholder="email"
          />

          <input
            name="message"
            type="textarea"
            placeholder="Your message here"
            style={styles.boxStyles}
          />

          {/* <button type="button" onClick={handleFormSubmit}>
          Submit
        </button> */}
        </form>
        {/* {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )} */}
      </div>
    </div>
  );
}

export default Contact;
