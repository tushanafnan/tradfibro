// AboutSection.js

import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { photoAnimation, titleAnimation } from "../animation";
import home1 from "../img/home1.jpg";
import { Description, Hide, ImageContainer, Layout } from "../styles";
import Footer from "./Footer";

const Header = styled(motion.div)`
  @media only screen and (min-width: 540px) and (max-width: 820px) {
    h2 {
      font-size: 3rem;
    }
  }
`;

const AboutSection = () => {
  const container = {
    hidden: { x: 100 },
    show: {
      x: 0,
      transition: {
        duration: 0.75,
        ease: "easeOut",
        staggerChildren: 0.8,
        when: "afterChildren",
      },
    },
  };

  return (
    <Layout>
      <Description style={{ zIndex: 2 }}>
        <Header
          variants={container}
          initial='hidden'
          animate='show'
          className='title'
        >
          <Hide>
            <motion.h3 variants={titleAnimation}>
              Hi, I’m Bob Analyst CFA CPA ACA NGMI HFSP. <br />
            </motion.h3>
          </Hide>
          <Hide>
            <motion.h3 variants={titleAnimation}>
              <br /> I want to help you master your finances so you can finally
              stop stressing and become financially free! <br />
            </motion.h3>
          </Hide>
          <Hide>
            <motion.h3 variants={titleAnimation}>
              <br /> I also want to help in Elizabeth Whoren’s noble fight
              against the illegal industry of ‘cryptocurrency’. <br />
            </motion.h3>
          </Hide>
          <Hide>
            <motion.h3 variants={titleAnimation}>
              <br /> I have amassed a small fortune of over $100,000 over the
              last fifteen years by diligently investing. Impressive right?{" "}
              <br />
            </motion.h3>
          </Hide>
          <Hide>
            <motion.h3 variants={titleAnimation}>
              <br /> I have achieved a consistent growth level of 6% annually
              and I can show you how you can achieve this too! <br />
            </motion.h3>
          </Hide>
          <Hide>
            <motion.h3 variants={titleAnimation}>
              <br /> My secret sauce? Dividend-yielding stocks and a knack of
              picking the greatest low-risk bonds. <br />
            </motion.h3>
          </Hide>
          <Hide>
            <motion.h3 variants={titleAnimation}>
              <br /> With my help, early retirement at the ripe age of 55 is not
              just a dream; it's a tangible reality! (unlike these ‘Crypto’
              scams) <br />
            </motion.h3>
            <br /> <br />
            <Footer />
          </Hide>
        </Header>
      </Description>
      <ImageContainer>
        <motion.img
          variants={photoAnimation}
          initial='hidden'
          animate='show'
          src={home1}
          alt='guy with a camera'
        />
      </ImageContainer>
    </Layout>
  );
};

export default AboutSection;
