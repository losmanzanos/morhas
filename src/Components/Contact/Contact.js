import React from "react";
import "./Contact.css";

import bg from "../images/contact-skyline.jpg";

const Contact = () => {
  const textInput = React.useRef();

  const clear = () => {
    textInput.current.value = "";
  };

  return (
    <section
      id="contact"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        opacity: 0.9,
      }}
    >
      <div>
        <header>
          <h2>Contact</h2>
        </header>
        <div>
          <form
            action="https://formspree.io/f/mnqownle"
            method="POST"
            target="_blank"
          >
            <input
              type="text"
              name="name"
              className="name"
              placeholder="name"
              required
              ref={textInput}
            />

            <input
              type="email"
              name="email"
              className="email"
              placeholder="email"
              required
              ref={textInput}
            />

            <textarea
              name="message"
              className="message"
              placeholder="message"
              rows="6"
              required
              ref={textInput}
            ></textarea>

            <ul name="actions" className="actions">
              <li>
                <input
                  onSubmit={clear}
                  type="submit"
                  value="send"
                  style={{ color: "black" }}
                />
              </li>
            </ul>
          </form>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12273.196492657673!2d-104.95913207050106!3d39.732931222923895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7ea555cecfb7%3A0x74e5c3dae1de43f9!2sCongress%20Park%2C%20Denver%2C%20CO%2080206!5e0!3m2!1sen!2sus!4v1610989431524!5m2!1sen!2sus"
        title="Denver"
      ></iframe>
    </section>
  );
};

export default Contact;
