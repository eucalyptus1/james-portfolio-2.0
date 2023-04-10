function Contact() {
  return (
    <div>
      <h2>Contact Me</h2>

      <form className="form">
        <input
          //   value={email}
          name="email"
          //   onChange={handleInputChange}
          type="email"
          placeholder="email"
        />

        <input name="email" type="text" placeholder="Your message here" />

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
  );
}

export default Contact;
