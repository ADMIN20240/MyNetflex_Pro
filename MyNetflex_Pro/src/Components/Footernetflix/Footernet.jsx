import React from "react";
import "./footernet.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footernet = () => {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        <div className="footer_icons">
          <TwitterIcon />
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className="footer_data">
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
              <li>Subscription</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>About Netflix</li>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <a>Corporate Information</a>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>
                Contact Us <br />
                Questions? Call 1-844-505-2993
              </li>
            </ul>
          </div>
        </div>
        <div className="service_code">
          <p>Service Code</p>
        </div>
        <div className="copy-write">
          &copy; 1997-2024 Netflix, Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footernet;
