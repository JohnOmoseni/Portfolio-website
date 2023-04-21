import { useRef } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

import Heading from "./Heading";

const containerVariant = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeIn" },
  },
};

function NewsLetter() {
  const form = useRef();
  const inputValue = useRef();

  const subscribe = e => {
    e.preventDefault();
    if (!inputValue.current.value) return;

    emailjs
      .sendForm("contact_id", "template_v2u3jr7", form.current, "7vZST2LG77Ar2RrNe")
      .then(result => {
        console.log(result.status);
        console.log("Sent Successfully");
        setOpenModal(true);
      })
      .catch(err => {
        console.log("Error sending email", err);
      })
      .finally(() => {
        inputValue.current.value = "";
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
      className="news-letter"
      id="newsletter"
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Heading name="newsletter" number="05." title="Subscribe to my NewsLetter" />

      <div className="container">
        <p className="fw-semi-bold">
          Subscribe to get information about new projects that I&lsquo;m working on
        </p>

        <form ref={form} onSubmit={subscribe}>
          <input
            ref={inputValue}
            type="text"
            required
            name="user_email"
            placeholder="Enter your Email address"
          />
          <button type="submit" className="subscribe-btn fw-semi-bold">
            Subscribe
          </button>
        </form>
      </div>
    </motion.section>
  );
}

export default NewsLetter;
