import React from "react";
import "../assets/css/font-awesome.min.css";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="ft-about">
        <div className="about-header">
          <h2>About</h2>
        </div>
        <div className="about-content">
          <p>
            This is <strong>Image Gallary</strong> site developed using <strong>PIXABAY</strong> apis.
          </p>
        </div>
      </div>
      <div className="ft-contact">
        <div className="copyright">
          <h4>No copyright reserved.</h4>
          <p>
            Design and developed by <h4>Nandkumar Gangai.</h4>
          </p>
        </div>
        <div className="social-connect">
          <ul className="social-icons">
            <li className="icon">
              <a className="github" target="_blank" rel="noopener noreferrer" href="https://github.com/NandKumarGangai">
                <i className="fa fa-github"></i>
              </a>
            </li>
            <li className="icon">
              <a className="twitter" target="_blank" rel="noopener noreferrer" href="https://twitter.com/gangainandkumar">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="icon">
              <a className="codepen" target="_blank" rel="noopener noreferrer" href="https://codepen.io/nandkumar_gangai">
                <i className="fa fa-codepen"></i>
              </a>
            </li>
            <li className="icon">
              <a className="linkedin" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nandkumar-gangai-910849123/">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
