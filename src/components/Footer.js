import React from 'react'
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";

import "../styles/Footer.css";




function Footer() {
    return (
      <div className="footer">
        <div className="socialMedia">
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon/>
        </div>
        <p> &copy; 2024</p>
      </div>
    );
  }
  
  export default Footer;