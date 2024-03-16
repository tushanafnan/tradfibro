import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  z-index: 5000;
  ul {
    display: flex;
    list-style: none;
    li {
      padding-left: 2rem;
      position: relative;
      color: #23d997;
    }
  }
  /* Kindel and iPad tablet  */
  @media only screen and (min-width: 540px) and (max-width: 820px) {
    padding: 2rem;
  }
  /* Mobile devices iPhone, Pixel */
  @media only screen and (max-width: 539px) {
    display: none; /* Hide Navbar for mobile */
  }
`;

const NavbarMobile = styled.nav`
  min-height: 10vh;
  display: none; /* Initially hide Navbar for desktop */
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1rem;
  background: #282828;
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  z-index: 5000;
  ul {
    display: flex;
    list-style: none;
    li {
      padding-left: 2rem;
      position: relative;
      color: #23d997;
    }
  }
  /* Mobile devices iPhone, Pixel */
  @media only screen and (max-width: 539px) {
    display: flex; /* Display Navbar for mobile */
  }
`;

const Nav = () => {
  return (
    <>
      <Navbar>
        <h1>
          <NavLink
            to='/'
            style={{
              color: "#23d997",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            TradfiBro
          </NavLink>
        </h1>
        <ul>
          <li>
            {/* Use anchor tag for external URL */}
            <a
              className='styled-link'
              href='https://jup.ag/swap/SOL-CFA_F1n2TBZkWWuUHNahSjQZtmeoQYjMvmHe1WYuCTwZv726'
              target='_blank' // Open in a new tab
              rel='noopener noreferrer' // Security measure
            >
              <button>Buy Now</button>
            </a>
          </li>
        </ul>
      </Navbar>
      <NavbarMobile>
        <h1>
          <NavLink
            to='/'
            style={{
              color: "#23d997",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            TradfiBro
          </NavLink>
        </h1>
        <ul>
          <li>
            {/* Use anchor tag for external URL */}
            <a
              className='styled-link'
              href='https://jup.ag/swap/SOL-CFA_F1n2TBZkWWuUHNahSjQZtmeoQYjMvmHe1WYuCTwZv726'
              target='_blank' // Open in a new tab
              rel='noopener noreferrer' // Security measure
            >
              <button>Buy Now</button>
            </a>
          </li>
        </ul>
      </NavbarMobile>
    </>
  );
};

export default Nav;
