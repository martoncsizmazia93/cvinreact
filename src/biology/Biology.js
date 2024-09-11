import React from 'react';
import './Biology.css';
import { Link } from 'react-scroll';
import styled from 'styled-components';

import Introduction from './Introduction';
import Study from './Study';
import Contact from './Contact';

const Biology = () => {
    return (
        <div>
            {/* Always visible navbar */}
            <Navbar>
                <NavLink to="introduction" smooth={true} duration={500}>
                    Bemutatkozás
                </NavLink>
                <NavLink to="study" smooth={true} duration={500}>
                    Tanulás
                </NavLink>
                <NavLink to="contact" smooth={true} duration={500}>
                    Kapcsolat
                </NavLink>
            </Navbar>

            {/* Sections */}
            <Section id="introduction">
                <Introduction />
            </Section>
            <Section id="study">
                <Study />
            </Section>
            <Section id="contact">
                <Contact />
            </Section>
        </div>
    );
};

export default Biology;

// Styled components for the Navbar and Section
const Navbar = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    padding: 15px 0;
    z-index: 10;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    font-family: 'Poppins', sans-serif;
`;

const NavLink = styled(Link)`
    margin: 0 20px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    color: #333;
    transition: 0.3s;
    &:hover {
        color: #007bff;
        transition: 0.3s
    ;
    }
`;

const Section = styled.section`
    //padding: 20px 0;
    &:nth-child(even) {
        //background-color: #f0e4d7; /* Base color resembling paper */
        //background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><circle cx="1" cy="1" r="1" fill="rgba(0,0,0,0.05)"/></svg>');
        background-size: 5px 5px;
    }
    &:nth-child(odd) {
        //background: #f7f7f7;
    }
`;
