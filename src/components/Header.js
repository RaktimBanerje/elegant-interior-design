'use client';
import React from 'react'
import Link from 'next/link';



const Header = () => {
  return (
    <>
  {/* Navbar */}
  <header className="main-header">
    <div className="header-sticky">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <img
              src="https://www.elegantinterior.info/landing-page/home-interiors/assets/images/logo.png"
              alt="Logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link menu-text" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle menu-text"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Design Ideas
                </Link>
                <div
                  className="mega-menu dropdown-menu"
                  aria-labelledby="navbarDropdown"
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-md-3">
                        <ul className="list-unstyled">
                          <li>
                            <Link
                              className="dropdown-item"
                              href="/design-ideas/home-interior-design"
                            >
                              Home Interior Design
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              href="/design-ideas/home-interior-design"
                            >
                              Living Room Designs
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              href="/design-ideas/home-interior-design"
                            >
                              Bathroom Designs
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-3">
                        <ul className="list-unstyled">
                          <li>
                            <Link
                              className="dropdown-item"
                              href="/design-ideas/home-interior-design"
                            >
                              False Ceilings Design
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              href="/design-ideas/home-interior-design"
                            >
                              Dining Room Designs
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              href="/design-ideas/home-interior-design"
                            >
                              TV Unit Designs
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-3">
                        <ul className="list-unstyled">
                          <li>
                            <Link
                              className="dropdown-item"
                              href="/design-ideas/home-interior-design"
                            >
                              Modular Kitchen Designs
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              href="/design-ideas/home-interior-design"
                            >
                              Pooja Room Designs
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              href="/design-ideas/home-interior-design"
                            >
                              Dining Room Designs
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-3">
                        <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/bh-new-header/design-quiz-header-banner.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle menu-text"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Projects
                </Link>
                <div
                  className="mega-menu dropdown-menu"
                  aria-labelledby="navbarDropdown"
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-md-3">
                        <ul className="list-unstyled">
                          <li>
                            <Link className="dropdown-item" href="/projects/urbana">
                              Urbana
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" href="/projects/urbana">
                              South-city
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" href="/projects/urbana">
                              One-Rajarhat
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-3">
                        <ul className="list-unstyled">
                          <li>
                            <Link className="dropdown-item" href="/projects/urbana">
                              Elita Garden Vista
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" href="/projects/urbana">
                              Ozone
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" href="/projects/urbana">
                              Emami City
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-3">
                        <ul className="list-unstyled">
                          <li>
                            <Link className="dropdown-item" href="/projects/urbana">
                              Elita Garden Vista
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" href="/projects/urbana">
                              Ozone
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" href="/projects/urbana">
                              Emami City
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-3">
                        <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/bh-new-header/budget-calculator-header-banner.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle menu-text"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Guides
                </Link>
                <div
                  className="mega-menu dropdown-menu"
                  aria-labelledby="navbarDropdown"
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-md-3">
                        <ul className="list-unstyled">
                          <li>
                            <Link
                              className="dropdown-item"
                              href="/guides/bedroom-design-guides"
                            >
                              Bedroom Design Guides
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              href="/guides/bedroom-design-guides"
                            >
                              Living Room Design Guides
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              href="/guides/bedroom-design-guides"
                            >
                              Balcony Design Guides
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              href="/guides/bedroom-design-guides"
                            >
                              Bathroom Design Guides
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-3">
                        <ul className="list-unstyled">
                          <li>
                            <Link
                              className="dropdown-item"
                              href="/guides/bedroom-design-guides"
                            >
                              Bedroom Design Guides
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              href="/guides/bedroom-design-guides"
                            >
                              Living Room Design Guides
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              href="/guides/bedroom-design-guides"
                            >
                              Balcony Design Guides
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              href="/guides/bedroom-design-guides"
                            >
                              Bathroom Design Guides
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-3">
                        <ul className="list-unstyled">
                          <li>
                            <Link
                              className="dropdown-item"
                              href="/guides/bedroom-design-guides"
                            >
                              Bedroom Design Guides
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              href="/guides/bedroom-design-guides"
                            >
                              Living Room Design Guides
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              href="/guides/bedroom-design-guides"
                            >
                              Balcony Design Guides
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              href="/guides/bedroom-design-guides"
                            >
                              Bathroom Design Guides
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-3">
                        <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/bh-new-header/design-quiz-header-banner.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link menu-text" href="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle menu-text"
                  href="/blog"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </Link>
                <div
                  className="mega-menu dropdown-menu"
                  aria-labelledby="navbarDropdown"
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-md-3">
                        <ul className="list-unstyled">
                          <li>
                            <Link
                              className="dropdown-item"
                              href="/showroom"
                            >
                              Showroom
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              href="/living-factory"
                            >
                              Living Factory
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              href="/tv"
                            >
                              TV
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-3">
                        <ul className="list-unstyled">
                          <li>
                            <Link className="dropdown-item" href="/testimonials">
                              Testimonial
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" href="/career">
                              Career
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              href="/award-and-recognition"
                            >
                              Awards and Recognition
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-3">
                        <ul className="list-unstyled">
                          <li>
                            <Link className="dropdown-item" href="/contact-us">
                              Contact Us
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" href="/about-us">
                              About Us
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" href="/faq">
                              FAQ
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-3">
                        <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/bh-new-header/budget-calculator-header-banner.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* Header Btn Start */}
          <div className="header-btn d-inline-flex">
            <Link href="contact.html" className="btn-default">
              get in touch
            </Link>
          </div>
          {/* Header Btn End */}
        </div>
      </nav>
    </div>
  </header>
  {/* Header End */}
</>

  )
}

export default Header