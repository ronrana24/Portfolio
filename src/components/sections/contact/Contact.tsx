import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./style.css";
import { FaRegPaperPlane } from "react-icons/fa";
import SubHeading from "../../common/sub-heading/SubHeading";
import Header from "../../common/heading/Header";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("service_dyo6led", "template_3iv5y3l", form.current, {
          publicKey: "tsBnrYgs7KU7KNgA8",
        })
        .then(() => {
          // Optionally handle successful email sending here
          console.log("Email sent successfully!");
        })
        .catch((error) => {
          // Handle errors here
          console.error("Failed to send email:", error);
        });

      e.currentTarget.reset(); // Reset the form after submission
    }
  };

  return (
    <section className="contact section" id="contact">
      <Header text="Get In Touch 📩" />
      <SubHeading text={`Ready to get started on your project? 
        Contact me now for a Free consultation.`} />
      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">
            Talk To Me<i className="uil uil-calling"></i>
          </h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                soumyajitbasak.work@gmail.com
              </span>
              <a
                href="mailto:soumyajitbasak.work@gmail.com"
                className="contact__button"
              >
                Write Me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">WhatsApp</h3>
              <span className="contact__card-data">(+91) 9591688760</span>
              <a
                href="https://api.whatsapp.com/send?phone=9591688760&text=Hello, I would like to connect with you!"
                className="contact__button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Write Me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
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
                name="name"
                className="contact__form-input"
                placeholder="Insert Your Name"
                required
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Mail</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Your Email Address"
                required
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Message</label>
              <textarea
                name="message"
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
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
