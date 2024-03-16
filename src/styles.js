// styles.js

import { motion } from "framer-motion";
import styled from "styled-components";

export const Layout = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;

  @media only screen and (max-width: 820px) {
    padding: 3rem;
    flex-direction: column;
  }

  @media only screen and (max-width: 539px) {
    padding: 1rem;
  }
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;

  @media only screen and (max-width: 820px) {
    padding: 0;
    text-align: center;
  }

  h2 {
    font-size: 2rem;
    color: white; /* Change text color to dark grey */
  }

  p {
    font-size: 1.2rem; /* Make text smaller */
    color: white; /* Change text color to a slightly lighter grey */
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  z-index: 2;
  overflow: hidden;

  @media only screen and (max-width: 820px) {
    margin-top: 3rem;
    justify-content: center;
  }

  img {
    width: 45%; /* Reduce image size */
    height: auto; /* Maintain aspect ratio */
    border-radius: 10px; /* Add rounded corners */
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
