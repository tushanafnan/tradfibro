import {
  faLinkedin,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faChartBar,
  faEnvelope,
  faExchangeAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='social-icons'>
          <a
            href='https://twitter.com/tradfibrocfa?s=21'
            target='_blank'
            className='item2'
            rel='noreferrer'
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href='https://t.me/CFA_COIN'
            target='_blank'
            rel='noreferrer'
            className='item3'
          >
            <FontAwesomeIcon icon={faTelegram} />
          </a>
          <a
            href='mailto:support@tradfibrocfs.com'
            target='_blank'
            rel='noreferrer'
            className='item4'
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a
            href='https://birdeye.so/token/F1n2TBZkWWuUHNahSjQZtmeoQYjMvmHe1WYuCTwZv726?chain=solana'
            target='_blank'
            rel='noreferrer'
            className='item5'
          >
            <FontAwesomeIcon icon={faChartBar} />
          </a>
          <a
            href='https://dexscreener.com/solana/hvpezkebajunhc5dfrsa2qvomru2g6mdhx1sktekbaeh'
            target='_blank'
            rel='noreferrer'
            className='item6'
          >
            <FontAwesomeIcon icon={faExchangeAlt} />
          </a>
          <a
            href='https://www.linkedin.com/in/tradfibro'
            target='_blank'
            rel='noreferrer'
            className='item7'
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
