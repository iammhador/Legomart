import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-accent text-success">
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/743/743007.png"
            alt="Logo"
            className="h-12 "
          />

          <p>
            Legomart, Bangladesh. <br />
            World Most Famous E-Commerce Platform.
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a href="." className="link link-hover">
            Branding
          </a>
          <a href="." className="link link-hover">
            Design
          </a>
          <a href="." className="link link-hover">
            Marketing
          </a>
          <a href="." className="link link-hover">
            Advertisement
          </a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a href="." className="link link-hover">
            About us
          </a>
          <a href="." className="link link-hover">
            Contact
          </a>
          <a href="." className="link link-hover">
            Jobs
          </a>
          <a href="." className="link link-hover">
            Press kit
          </a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a href="." className="link link-hover">
            Terms of use
          </a>
          <a href="." className="link link-hover">
            Privacy policy
          </a>
          <a href="." className="link link-hover">
            Cookie policy
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
