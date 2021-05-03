import React from "react";
import portfolio from "../../utils/portfolio.jpg";
import { Typography } from "@material-ui/core";
import "./AboutMe.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faGithubSquare, faLinkedinIn, } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import './AboutMe.css'

const AboutMe = () => {
  const link='https://drive.google.com/uc?export=download&id=14aBQ_9YzmzG2t3RSqGrPgXPwO-8-NgzZ';
  const myStyle={
    textDecoration:'none',
    color:'white',
    fontWeight:500
}

  return (
    <React.Fragment>
      <Typography
        variant="h2"
        display="block"
        align="center"
        style={{
          margin: "1rem",
          fontSize: "1.6rem",
          textTransform: "uppercase"
        }}
      >
        {/*  <Element name="about-me" id="about-me">
                About Me
            </Element> */}
      </Typography>
      <div className="name">
        <img src={portfolio} alt="profile_photo" className="img" />
        <h1>Abdullah Al Rafee</h1>
        <div className="subtitle">
          <h3>I am a Full stack web developer.</h3>
          <p>
            Creating Beautiful things with quality and elegance! <br />
            Experienced in Javascript and Python. My favourite technology is
            ReactJS
          </p>
        </div>
        <div className="icons mb-4">
                        {/* <a href="https://www.facebook.com/abdullahal.rafee" rel="noopener noreferrer" target="_blank">
                            <FontAwesomeIcon icon={faFacebookSquare} size="2x" className="icon" />
                        </a>

                        <a href="https://www.linkedin.com/in/abdullah-al-rafee-b4830b16b/" rel="noopener noreferrer" target="_blank">
                            <FontAwesomeIcon icon={faLinkedinIn} size="2x" className="icon" />
                        </a>

                        <a href="https://github.com/Rafee1100" rel="noopener noreferrer" target="_blank">
                            <FontAwesomeIcon icon={faGithubSquare} size="2x" className="icon" />
                        </a> */}
                    </div>

                    <div>
                        <button className="btn btn-primary mr-3 link-nav">
                        <FontAwesomeIcon icon={faDownload} className="mr-2" />
                            <a style={myStyle} href={link} download> Resume</a>
                        </button>
                        <button className="btn btn-primary link-nav">
                            <a className="" style={myStyle}  href="https://www.linkedin.com/in/abdullah-al-rafee-b4830b16b/" rel="noopener noreferrer" target="_blank">
                                Hire Me
                            </a>
                        </button>
                    </div>
      </div>
    </React.Fragment>
  );
};

export default AboutMe;
