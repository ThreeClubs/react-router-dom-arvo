function Contact() {
  return (
    <div className="Home">
      <h1 className="Home__hdg">Contact Us</h1>
      <form className="form">
        <label className="Home__p labels">
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label className="Home__p labels">
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label className="Home__p labels">
          Message:
          <textarea name="message" />
        </label>
        <br />
        <button className="link" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
