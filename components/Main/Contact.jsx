import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BiMailSend } from "react-icons/bi";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

import Heading from "./Heading";
import ContactImg from "public/assets/images/img7.png";

const containerVariant = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: "easeIn" },
  },
};

function Contact() {
  const [inputValues, setInputValues] = useState({ user_name: "", user_email: "", message: "" });
  const form = useRef();

  const handleInputChange = e => {
    const value = e.target.value;
    setInputValues(prev => ({ ...prev, [e.target.name]: value }));
  };

  const sendEmail = e => {
    e.preventDefault();
    if (!inputValues.user_name || !inputValues.user_email) return;

    emailjs
      .sendForm("contact_id", "template_v2u3jr7", form.current, "7vZST2LG77Ar2RrNe")
      .then(result => {
        console.log(result.text);
        console.log("message sent");
      })
      .catch(err => {
        console.log("Error sending email", err);
      })
      .finally(() => {
        form.current.reset();
        setInputValues(prev => ({ ...prev, user_name: "", user_email: "", message: "" }));

        Swal.fire({
          icon: "success",
          titleText: "Sent",
          text: "Your message has been sent successfully fam!",
          confirmButtonText: "Cool!",
        });
      });
  };

  return (
    <motion.section
      className="contact-page"
      id="contact"
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Heading name="contact" number="06. What's Next?" title="Get In Touch" disabled />
      <p className="subtitle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus asperiores eos
        laboriosam dignissimos rem quis nihil quibusdam velit officiis nesciunt ipsa molestiae,
        laborum nostrum sint ex quisquam quo atque. Obcaecati.
      </p>
      <div className="content">
        <div className="img-container">
          <Image src={ContactImg} alt="" placeholder="blur" />
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <input
              type="text"
              name="user_name"
              value={inputValues.user_name}
              placeholder="Your name"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="user_email"
              value={inputValues.user_email}
              title="Enter a valid email"
              placeholder="Your email"
              required
              pattern="[a-zA-Z0-9 -_.]+@[a-zA-Z0-9 -_.]+\.[a-z]{2,}"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <textarea
              rows="10"
              name="message"
              value={inputValues.message}
              type="text"
              required
              placeholder="Your message"
              onChange={handleInputChange}
            ></textarea>
          </div>

          <button type="submit" className="send-message">
            Send message
            <span>
              <BiMailSend size={18} fill="#00bd8e" />
            </span>
          </button>
        </form>
      </div>
    </motion.section>
  );
}

export default Contact;
