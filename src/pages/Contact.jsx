import { useState } from "react";

 const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    alert("Thank you for contacting us! We will get back to you soon.");
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className="container p-4 card-gradient mt-4">
      <h1>Contact Us</h1>
      <p>Have questions or feedback? We'd love to hear from you!</p>
      <div className="col-lg-6 col-md-6">
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label ">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-danger">
          Send Message
        </button>
      </form>
      </div>
    </div>
  )
}

export default Contact;
