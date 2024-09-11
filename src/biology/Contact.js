import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookMessenger, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <ContactContainer>
            <div className="section-container">
                <h2>Kapcsolat</h2>
                <p>Keress bátran az alábbi csatornákon.</p>
                <div className="contact-methods">
                    <div className="contact">
                        +36303165634
                        <FontAwesomeIcon icon={faPhone}/>
                    </div>
                    <div className="contact">
                        Facebook
                        <FontAwesomeIcon icon={faFacebookMessenger}/>
                    </div>
                    <div className="contact">
                        Instagram
                        <FontAwesomeIcon icon={faInstagram}/>
                    </div>
                </div>
            </div>
        </ContactContainer>
);
};

export default Contact;

const ContactContainer = styled.div`
    text-align: center;
    padding: 50px 0;
    background-color: #8490c8;
    font-family: 'Poppins', sans-serif;

    h2 {
        font-size: 2.5rem;
        color: #333;
        margin-bottom: 20px;
        font-weight: bold;
    }

    p {
        font-size: 1.25rem;
        margin: 20px 0;
        color: #fff;
    }

    .contact-methods{
        display: flex;
        justify-content: space-evenly;
        color: #fff;
    }

    .contact{
        display: flex;
        flex-direction: column-reverse
    }
    
    .svg-inline--fa{
        margin-bottom: 0.5rem;
        font-size: 24px;
    }
`;
