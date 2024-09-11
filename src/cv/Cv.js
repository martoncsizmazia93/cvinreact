import './Cv.css';
import "@fontsource/montserrat"
import myImage from './profile-picture.png';
import myCV from './Márton-Csizmazia-CV.pdf';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Cv() {

    return (
        <motion.div
            className="motion"
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{ duration: 0.3 }}
            exit={{opacity:0, transition: {duration: 1}}}
        >
            <div className="App" >

                <div className="cv " >
                    <div className="left-section">
                        <div className="left-section-container">
                            <div className="photo">
                                <img src={myImage} alt="My Image" />
                            </div>
                            <div className="name">MÁRTON CSIZMAZIA</div>
                            <div className="title">MEDIOR SOFTWARE DEVELOPER</div>
                            <hr className="separating-line"/>
                            <div className="left-section-title">ABOUT ME</div>
                            <div className="about-me">I am calm and considered when it
                                comes to problem solving. I complete
                                my tasks with great care and I am always
                                ready to join others to achieve the best
                                solution. It is very important to me to
                                express myself in a clear and direct way,
                                while still listen thoroughly and
                                respecting others. My goal is to bring fun
                                and energy to the work and I am open
                                minded to everyone that surrounds me. I
                                am ready to take on any challenges that
                                come to my sight: the harder the task,
                                the bigger the joy when it is completed.</div>
                            <div className="left-section-title">MY SKILLS</div>
                            <div className="skill-container">
                                <div className="skill">
                                    <div className="skill-name">Google</div>
                                    <div className="skill-bar">
                                        <div className="bar bar-1">&zwnj;</div>
                                    </div>
                                </div>
                                <div className="skill">
                                    <div className="skill-name">Java, Spring Boot</div>
                                    <div className="skill-bar">
                                        <div className="bar bar-2">&zwnj;</div>
                                    </div>
                                </div>
                                <div className="skill">
                                    <div className="skill-name">Javascript, React</div>
                                    <div className="skill-bar">
                                        <div className="bar bar-3">&zwnj;</div>
                                    </div>
                                </div>
                                <div className="skill">
                                    <div className="skill-name">Web languages</div>
                                    <div className="skill-bar">
                                        <div className="bar bar-4">&zwnj;</div>
                                    </div>
                                </div>
                                <div className="skill">
                                    <div className="skill-name">SQL</div>
                                    <div className="skill-bar">
                                        <div className="bar bar-5">&zwnj;</div>
                                    </div>
                                </div>
                                <div className="skill">
                                    <div className="skill-name">Python, Flask</div>
                                    <div className="skill-bar">
                                        <div className="bar bar-6">&zwnj;</div>
                                    </div>
                                </div>
                            </div>
                            <div className="left-section-title">SPOKEN LANGUAGES</div>
                            <div className="spoken-language">English – Upper Intermediate / Active</div>
                            <div className="spoken-language">German – Intermediate / Passive</div>
                            <div className="left-section-title">CONTACT ME</div>
                            <div className="contact-line">Phone: +36303165634</div>
                            <div className="contact-line">E-Mail: csmarton93@gmail.com</div>
                            <div className="contact-line">Github: https://github.com/MartonCsizmazia</div>
                            <div className="left-section-title download-button-container">
                                <a className="download-button" href={myCV} download="Márton-Csizmazia-CV.pdf">
                                    Download PDF
                                </a>
                            </div>

                        </div>
                    </div>
                    {/*######################################################################*/}
                    <div className="right-section">
                        <div className="right-section-container">
                            <div className="right-section-segment">
                                <div className="right-section-title">
                                    WORK EXPERIENCE
                                </div>
                                <div className="right-section-panel">
                                    <div className="a-work">
                                        <div className="work-title">Fullstack Developer (Sep 2022 - Jan 2024)</div>
                                        <div className="work-location">Clario Clinical - Budapest</div>
                                        <div className="work-describtion">Creating phone and web apps for pharmacy clinical trials in Waterfall
                                            methodology from initial design to UAT, using Java, Spring Boot, NodeJs,
                                            React and web languages.</div>
                                    </div>
                                    <div className="a-work">
                                        <div className="work-title">Fullstack Developer (Dec 2021 - Jul 2022)</div>
                                        <div className="work-location">Voormedia B.V. - Amsterdam</div>
                                        <div className="work-describtion">Maintaining and building various web apps and client data in Agile teams
                                            for our clients (e.g. Omron), mostly using Ruby on Rails, React, JS, HTML,
                                            CSS, PSQL</div>
                                    </div>
                                    <div className="a-work">
                                        <div className="work-title">Java Developer (Aug 2020 - Nov 2021)</div>
                                        <div className="work-location">Deutsche Telekom IT Solutions - Budapest</div>
                                        <div className="work-describtion">Maintaining and building company ERP in Agile team with Spring Boot for
                                            the customer department, handling incoming API and functionality
                                            requests, error resolving</div>
                                    </div>
                                    <div className="a-work">
                                        <div className="work-title">Thesis research work (2017-2019)</div>
                                        <div className="work-location">Cyclolab Kft. - Budapest</div>
                                        <div className="work-describtion"></div>
                                    </div>

                                </div>
                            </div>
                            <div className="right-section-segment">
                                <div className="right-section-title">
                                    EDUCATION
                                </div>
                                <div className="right-section-panel">
                                    <div className="a-work">
                                        <div className="work-location">(2019-2020) Codecool - Software developer bootcamp</div>
                                        <div className="work-describtion">&nbsp;&nbsp;&nbsp;Hard skills:<br/>
                                            SCRUM teams, Agile methodology, Python, Web development in Flask
                                            with Web Languages, React, REST Api, PSQL databases, Github<br/>
                                            Java EE, Spring Boot, ORM, Data structures, Unit testing, Algorithmisation<br/>
                                            &nbsp;&nbsp;&nbsp;Soft skills:<br/>
                                            Teamwork, Active listening, Conflict resolution, Assertive communication,
                                            Client presentations, Transparent athmosphere, Leadership, Adaptability</div>
                                    </div>
                                    <div className="a-work">
                                        <div className="work-location">(2012-2022) Budapest University of Technology and
                                            Economics - Bioengineering</div>
                                        <div className="work-describtion">Specialized in Advanced biotechnology, Advanced mathematics, Physics
                                            and Chemistry courses. Molecular biology, Analytical chemistry, Biochemistry</div>
                                    </div>
                                    <div className="a-work">
                                        <div className="work-location">(2000-2012) Graduation – Klotildigeti Ward Mária High School</div>

                                    </div>
                                </div>
                            </div>
                            <div className="right-section-segment">
                                <div className="right-section-title">
                                    MY RECENT PERSONAL PROJECTS
                                </div>
                                <div className="right-section-panel">
                                    <div className="a-work">
                                        <div className="work-location">Website for a photographer</div>
                                        <div className="work-describtion"><a href="https://www.stellanovak.com/" className="project-url">stellanovak.com</a><br/>
                                            Multi platform web app in React, with DatoCMS, responsivity, mobile view, 100% level page
                                            speed improvements and google search optimization</div>
                                    </div>
                                    <div className="a-work">
                                        <div className="work-location">Saashub</div>
                                        <div className="work-describtion"><a href="https://vimeo.com/706885909/2574a3c2b2" className="project-url">vimeo.com</a><br/>
                                            Company tool collector app, Ruby on Rails backend, REST Api, JS frontend,
                                            responsivity</div>
                                    </div>
                                    <div className="a-work">
                                        <div className="work-location">Anki study-cards app</div>
                                        <div className="work-describtion"><a href="https://github.com/MartonCsizmazia/ankispringbackend" className="project-url">github.com</a><br/>
                                            A flashcard study app with Spring Boot backend, PSQL & React frontend.
                                            Create, edit, and review flashcards with REST Api</div>
                                    </div>
                                </div>
                            </div>
                            <div className="right-section-segment">
                                <div className="right-section-title">
                                    PROFESSIONAL INTERESTS
                                </div>
                                <div className="right-section-panel">
                                    <div className="a-work">
                                        <div className="work-describtion">&nbsp;&nbsp;&nbsp;My main interest is in frontend development and in algorithmisation
                                            problems, but I am comfortable working in backend too. I would like to
                                            maintain my previously gained knowledge in Java and Python, but also
                                            would like to deepen my knowledge in SQL, data structures and Cloud
                                            technologies like AWS.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </motion.div>
    );
}

export default Cv;
