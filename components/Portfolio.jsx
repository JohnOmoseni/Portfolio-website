"use client";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./Header/Header";
import Sidebar from "./Sidebar";
import Banner from "./Banner/Banner";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

import Menu from "./Menu";
import Loader from "./Loader";
import SocialLinks from "./SocialLinks";

function Portfolio() {
  const [openMenu, setOpenMenu] = useState(false);
  const [loading, setLoading] = useState(true);

  const headerRef = useRef(null);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  useEffect(() => {
    if (headerRef.current) {
      const headerHeight = headerRef.current.offsetHeight + 5;
      const html = document.documentElement;

      html.style.setProperty("--scroll-paddding", `${headerHeight}px`);
    }
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div key="loader">
          <Loader setLoading={setLoading} />
        </motion.div>
      ) : (
        <>
          {openMenu && <Menu setOpenMenu={setOpenMenu} />}
          <Sidebar orientation="left">
            <SocialLinks />
          </Sidebar>
          <Sidebar orientation="right">
            <a
              href="mailto:johnnyomoseni100@gmail.com"
              className="email fs-small ff-variant"
              title="Email"
            >
              johnnyomoseni100@gmail.com
            </a>
          </Sidebar>

          <Header elem={headerRef} setOpenMenu={setOpenMenu} />
          <Banner />
          <Main />
          <Footer />
        </>
      )}
    </AnimatePresence>
  );
}

export default Portfolio;
