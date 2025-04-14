import React from 'react'

const Footer = () => {
  return (
    <>
    {/* Footer Start */}
    <footer className="main-footer">
        <div className="container">
        <div className="row">
            <div className="col-lg-12">
            {/* Footer Header Start */}
            <div className="footer-header">
                <div className="row align-items-center">
                <div className="col-md-6">
                    {/* Footer Logo Start */}
                    <div className="footer-logo">
                    <img
                        src="https://www.elegantinterior.info/landing-page/home-interiors/assets/images/logo.png"
                        alt=""
                    />
                    </div>
                    {/* Footer Logo End */}
                </div>
                <div className="col-md-6">
                    {/* Footer Social Link Start */}
                    <div className="footer-social-links">
                    <div className="footer-social-link-title">
                        <h3>follow our socials</h3>
                    </div>
                    <ul>
                        <li>
                        <a href="#">
                            <i className="fa-brands fa-facebook-f" />
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            <i className="fa-brands fa-dribbble" />
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            <i className="fa-brands fa-instagram" />
                        </a>
                        </li>
                    </ul>
                    </div>
                    {/* Footer Social Link End */}
                </div>
                </div>
            </div>
            {/* Footer Header End */}
            </div>
            <div className="col-lg-3 col-md-6">
            {/* Footer Links Start */}
            <div className="footer-links">
                <h3>information</h3>
                <ul>
                <li>
                    <a href="about.html">about our company</a>
                </li>
                <li>
                    <a href="services.html">view our service</a>
                </li>
                <li>
                    <a href="#">careers at company</a>
                </li>
                <li>
                    <a href="blog.html">read our blog</a>
                </li>
                <li>
                    <a href="projects.html">our latest projects</a>
                </li>
                </ul>
            </div>
            {/* Footer Links End */}
            </div>
            <div className="col-lg-3 col-md-6">
            {/* Footer Links Start */}
            <div className="footer-links">
                <h3>portfolio</h3>
                <ul>
                <li>
                    <a href="project-single.html">luxury home design</a>
                </li>
                <li>
                    <a href="project-single.html">residential interior design</a>
                </li>
                <li>
                    <a href="project-single.html">commercial space design</a>
                </li>
                <li>
                    <a href="project-single.html">residential interior design</a>
                </li>
                <li>
                    <a href="project-single.html">
                    renovation and restoration design
                    </a>
                </li>
                </ul>
            </div>
            {/* Footer Links End */}
            </div>
            <div className="col-lg-3 col-md-6">
            {/* Footer Contact Box Start */}
            <div className="footer-contact-box footer-links">
                <h3>contact us</h3>
                {/* Footer Contact Item Start */}
                <div className="footer-contact-item">
                <div className="icon-box">
                    <i className="fa-solid fa-phone" />
                </div>
                <div className="footer-contact-content">
                    <p>+1 (213) 465 789</p>
                </div>
                </div>
                {/* Footer Contact Item End */}
                {/* Footer Contact Item Start */}
                <div className="footer-contact-item">
                <div className="icon-box">
                    <i className="fa-solid fa-envelope" />
                </div>
                <div className="footer-contact-content">
                    <p>info@domain.com</p>
                </div>
                </div>
                {/* Footer Contact Item End */}
                {/* Footer Contact Item Start */}
                <div className="footer-contact-item">
                <div className="icon-box">
                    <i className="fa-solid fa-location-dot" />
                </div>
                <div className="footer-contact-content">
                    <p>Generała Ziętka Jerzego 54, Mysłowice 41-412</p>
                </div>
                </div>
                {/* Footer Contact Item End */}
            </div>
            {/* Footer Contact Box End */}
            </div>
            <div className="col-lg-3 col-md-6">
            {/* Footer Newsletter Form Start */}
            <div className="footer-latest-news footer-links">
                <h3>get the latest trending news</h3>
                <div className="footer-newsletter-form">
                <p>
                    Your Dream Space Starts Here Get Exclusive Design Straight Your
                    Inbox!
                </p>
                <form id="newslettersForm" action="#" method="POST">
                    <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="mail"
                        placeholder="Enter your email"
                        required=""
                    />
                    <button type="submit">
                        <i className="fa-solid fa-arrow-right-long" />{" "}
                    </button>
                    </div>
                </form>
                </div>
            </div>
            {/* Footer Newsletter Form End */}
            </div>
        </div>
        {/* Footer Copyright Section Start */}
        <div className="footer-copyright">
            <div className="row">
            <div className="col-md-12">
                {/* Footer Copyright Start */}
                <div className="footer-copyright-text">
                <p>Copyright © 2024 All Rights Reserved.</p>
                </div>
                {/* Footer Copyright End */}
            </div>
            </div>
        </div>
        {/* Footer Copyright Section End */}
        </div>
    </footer>
    {/* Footer End */}
    </>
  )
}

export default Footer