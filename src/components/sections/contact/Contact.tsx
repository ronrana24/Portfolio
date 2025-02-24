import React, { useRef, useState } from "react";
import "./style.css";
import { FaRegPaperPlane } from "react-icons/fa";
import SubHeading from "../../common/sub-heading/SubHeading";
import Header from "../../common/heading/Header";
import EmailProvider from "../../../utils/EmailProvider";
import { SOCIAL_LINKS } from "../../../assets/constant";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      await EmailProvider({
        templateId: "template_4tar1qu",
        form: form.current,
      });
      setIsSent(true);
      form.current.reset(); // Reset the form after submission
      setTimeout(() => setIsSent(false), 5000); // Hide message after 5 seconds
    }
  };

  return (
    <section className="contact section" id="contact">
      <Header text="Get In Touch 📩" />
      <SubHeading
        text={`Ready to get started on your project? 
        Contact me now for a Free consultation.`}
      />
      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">
            Talk To Me<i className="uil uil-calling"></i>
          </h3>

          <div className="contact__info">
            {SOCIAL_LINKS.map((link, index) => (
              <a key={index} href={link.url} className="contact__button">
                <div className="contact__card">
                  {<link.icon className="contact__button-icon" />}
                  <h3 className="contact__card-title">{link.name}</h3>
                    <span className="contact__card-data">{link.text}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">
            Write Me Your Message<i className="uil uil-message"></i>
          </h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="senderName"
                className="contact__form-input"
                placeholder="Insert Your Name"
                required
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Mail</label>
              <input
                type="email"
                name="senderEmail"
                className="contact__form-input"
                placeholder="Your Email Address"
                required
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Message</label>
              <textarea
                name="senderMessage"
                cols={30}
                rows={10}
                className="contact__form-input"
                placeholder="Send a message to get started."
                required
              ></textarea>
            </div>

            <button type="submit" className="button button--flex">
              Send Message
              <FaRegPaperPlane className="button__icon" />
            </button>

            {isSent && (
              <p
                className="success-message"
                style={{ color: "green", marginTop: "10px" }}
              >
                ✅ Your message has been sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
