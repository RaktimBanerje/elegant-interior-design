import React from 'react'

const page = () => {
  return (
    <>
      {/* Hero Section Start */}
      <div className="hero hero-slider-layout">
        <div className="swiper">
          <div className="swiper-wrapper">
            {/* Hero Slide Start */}
            <div className="swiper-slide">
              <div className="hero-slide">
                {/* Slider Image Start */}
                <div className="hero-slider-image">
                  <img src="images/hero-bg.jpg" alt="" />
                </div>
                {/* Slider Image End */}
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-10">
                      {/* Hero Content Start */}
                      <div className="hero-content">
                        {/* Section Title Start */}
                        <div className="section-title">
                          <h3 className="wow fadeInUp">inspired interiors</h3>
                          <h1 className="text-anime-style-2" data-cursor="-opaque">
                            Designing your dream spaces, one room at a time
                          </h1>
                          <p className="wow fadeInUp" data-wow-delay="0.2s">
                            We specialize in creating personalized, functional, and
                            stylish interiors that reflect your unique vision.
                          </p>
                        </div>
                        {/* Section Title End */}
                        {/* Hero Button Start */}
                        <div
                          className="hero-btn wow fadeInUp"
                          data-wow-delay="0.4s"
                        >
                          <a href="about.html" className="btn-default">
                            explore more
                          </a>
                          <a
                            href="projects.html"
                            className="btn-default btn-highlighted"
                          >
                            view projects
                          </a>
                        </div>
                        {/* Hero Button End */}
                      </div>
                      {/* Hero Content End */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Hero Slide End */}
            {/* Hero Slide Start */}
            <div className="swiper-slide">
              <div className="hero-slide">
                {/* Slider Image Start */}
                <div className="hero-slider-image">
                  <img src="images/hero-bg-2.jpg" alt="" />
                </div>
                {/* Slider Image End */}
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-10">
                      {/* Hero Content Start */}
                      <div className="hero-content">
                        {/* Section Title Start */}
                        <div className="section-title">
                          <h3 className="wow fadeInUp">inspired interiors</h3>
                          <h1 className="text-anime-style-2" data-cursor="-opaque">
                            Designing your dream spaces, one room at a time
                          </h1>
                          <p className="wow fadeInUp" data-wow-delay="0.2s">
                            We specialize in creating personalized, functional, and
                            stylish interiors that reflect your unique vision.
                          </p>
                        </div>
                        {/* Section Title End */}
                        {/* Hero Button Start */}
                        <div
                          className="hero-btn wow fadeInUp"
                          data-wow-delay="0.4s"
                        >
                          <a href="about.html" className="btn-default">
                            explore more
                          </a>
                          <a
                            href="projects.html"
                            className="btn-default btn-highlighted"
                          >
                            view projects
                          </a>
                        </div>
                        {/* Hero Button End */}
                      </div>
                      {/* Hero Content End */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Hero Slide End */}
          </div>
          <div className="hero-pagination" />
        </div>
      </div>
      {/* Hero Section End */}
      {/* About Us Section Start */}
      <div className="about-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/* About Us Images Start */}
              <div className="about-us-images">
                {/* About Image 1 Start */}
                <div className="about-img-1">
                  <figure className="image-anime reveal">
                    <img src="images/about-img-1.jpg" alt="" />
                  </figure>
                </div>
                {/* About Image 1 End */}
                {/* About Image 2 Start */}
                <div className="about-img-2">
                  <figure className="image-anime reveal">
                    <img src="images/about-img-2.jpg" alt="" />
                  </figure>
                  {/* Feedback Counter Start */}
                  <div className="experience-counter">
                    <h3>
                      <span className="counter">15</span>+
                    </h3>
                    <p>Years of experience</p>
                  </div>
                  {/* Feedback Counter End */}
                </div>
                {/* About Image 2 End */}
                {/* Feedback Counter Start */}
                <div className="feedback-counter">
                  <p>
                    <span className="counter">95</span>%
                  </p>
                  <h3>positive feedback</h3>
                </div>
                {/* Feedback Counter End */}
              </div>
              {/* About Us Images End */}
            </div>
            <div className="col-lg-6">
              {/* About Us Content Start */}
              <div className="about-us-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <h3 className="wow fadeInUp">about us</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    Our passion for design, your <span>vision realized</span>
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    Our dedicated team of designers works closely with you to
                    understand your vision and bring it to life with thoughtful
                    attention to detail. Whether it's transforming a single room or
                    an entire home.
                  </p>
                </div>
                {/* Section Title End */}
                {/* About Us Content Body Start */}
                <div className="about-us-content-body">
                  {/* About Content Info Start */}
                  <div className="about-us-content-info">
                    {/* About Us Content List Start */}
                    <div
                      className="about-us-content-list wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <ul>
                        <li>creative expertise</li>
                        <li>client-centered approach</li>
                      </ul>
                    </div>
                    {/* About Us Content List End */}
                    {/* About Us Content Button Start */}
                    <div
                      className="about-us-content-btn wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      <a href="about.html" className="btn-default">
                        read more
                      </a>
                    </div>
                    {/* About Us Content Button End */}
                  </div>
                  {/* About Content Info End */}
                  {/* About Content List Start */}
                  <div className="about-us-contact-list">
                    {/* About Contact Item Start */}
                    <div
                      className="about-contact-item wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <div className="icon-box">
                        <i className="fa-solid fa-phone" />
                      </div>
                      <div className="about-contact-content">
                        <p>need any help?</p>
                        <h3>+(1) 235 800 999</h3>
                      </div>
                    </div>
                    {/* About Contact Item End */}
                    {/* About Contact Item Start */}
                    <div
                      className="about-contact-item wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      <div className="icon-box">
                        <figure className="image-anime">
                          <img src="images/author-1.jpg" alt="" />
                        </figure>
                      </div>
                      <div className="about-contact-content">
                        <h3>leslie alexander</h3>
                        <p>co founder</p>
                      </div>
                    </div>
                    {/* About Contact Item End */}
                  </div>
                  {/* About Content Info End */}
                </div>
                {/* About Us Content Body End */}
              </div>
              {/* About Us Content End */}
            </div>
          </div>
        </div>
      </div>
      {/* About Us Section End */}
      {/* Why Choose Us Section Start */}
      <div className="why-choose-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              {/* Why Choose Content Start */}
              <div className="why-choose-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <h3 className="wow fadeInUp">why choose us</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    A behind the scenes look at <span>our agency</span>
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    From concept to completion, discover how we bring your vision to
                    life with innovation, collaboration, and expert craftsmanship.
                  </p>
                </div>
                {/* Section Title End */}
                {/* Why Choose Item List Start */}
                <div className="why-choose-item-list">
                  {/* Why Choose Item Start */}
                  <div
                    className="why-choose-item wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    {/* Icon Box Start */}
                    <div className="icon-box">
                      <img src="images/icon-why-choose-1.svg" alt="" />
                    </div>
                    {/* Icon Box End */}
                    {/* Why Choose Item Content Start */}
                    <div className="why-choose-item-content">
                      <h3>tailored design solutions</h3>
                      <p>
                        We provide personalized interior design services that
                        reflect your unique vision and lifestyle.
                      </p>
                    </div>
                    {/* Why Choose Item Content End */}
                  </div>
                  {/* Why Choose Item End */}
                  {/* Why Choose Item Start */}
                  <div
                    className="why-choose-item wow fadeInUp"
                    data-wow-delay="0.6s"
                  >
                    {/* Icon Box Start */}
                    <div className="icon-box">
                      <img src="images/icon-why-choose-2.svg" alt="" />
                    </div>
                    {/* Icon Box End */}
                    {/* Why Choose Item Content Start */}
                    <div className="why-choose-item-content">
                      <h3>Seamless Project Management</h3>
                      <p>
                        We handle the entire design process, from concept to
                        completion, with flawless execution.
                      </p>
                    </div>
                    {/* Why Choose Item Content End */}
                  </div>
                  {/* Why Choose Item End */}
                  {/* Why Choose Item Start */}
                  <div
                    className="why-choose-item wow fadeInUp"
                    data-wow-delay="0.8s"
                  >
                    {/* Icon Box Start */}
                    <div className="icon-box">
                      <img src="images/icon-why-choose-3.svg" alt="" />
                    </div>
                    {/* Icon Box End */}
                    {/* Why Choose Item Content Start */}
                    <div className="why-choose-item-content">
                      <h3>Client-Centered Collaboration</h3>
                      <p>
                        Your input is valued throughout the entire process, ensuring
                        your vision is fully realized.
                      </p>
                    </div>
                    {/* Why Choose Item Content End */}
                  </div>
                  {/* Why Choose Item End */}
                </div>
                {/* Why Choose Item List End */}
              </div>
              {/* Why Choose Content End */}
            </div>
            <div className="col-lg-7">
              {/* Why Choose Images Images Start */}
              <div className="why-choose-images">
                {/* Why Choose Box 1 Start */}
                <div className="why-choose-img-box-1">
                  {/* Why Choose img 1 Start */}
                  <div className="why-choose-img-1">
                    <figure className="image-anime reveal">
                      <img src="images/why-choose-img-1.jpg" alt="" />
                    </figure>
                  </div>
                  {/* Why Choose img 1 End */}
                  {/* Why Choose img 2 Start */}
                  <div className="why-choose-img-2">
                    <figure className="image-anime reveal">
                      <img src="images/why-choose-img-2.jpg" alt="" />
                    </figure>
                  </div>
                  {/* Why Choose img 2 End */}
                </div>
                {/* Why Choose Box 1 End */}
                {/* Why Choose Box 2 Start */}
                <div className="why-choose-img-box-2">
                  {/* Why Choose img 3 Start */}
                  <div className="why-choose-img-3">
                    <figure className="image-anime reveal">
                      <img src="images/why-choose-img-3.jpg" alt="" />
                    </figure>
                  </div>
                  {/* Why Choose img 3 End */}
                  {/* Why Choose img 4 Start */}
                  <div className="why-choose-img-4">
                    <figure className="image-anime reveal">
                      <img src="images/why-choose-img-4.jpg" alt="" />
                    </figure>
                  </div>
                  {/* Why Choose img 4 End */}
                </div>
                {/* Why Choose Box 2 End */}
              </div>
              {/* Why Choose Images Images End */}
            </div>
          </div>
        </div>
      </div>
      {/* Why Choose Us Section End */}
      {/* Our Services Section Start */}
      <div className="our-services">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-6">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">our services</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Innovative design services for <span>every need</span>
                </h2>
              </div>
              {/* Section Title End */}
            </div>
            <div className="col-lg-6">
              {/* Section Title Content Start */}
              <div className="section-title-content">
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  We offer a range of bespoke interior design services tailored to
                  your unique needs. From concept development to final installation.
                </p>
              </div>
              {/* Section Title Content End */}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              {/* Service Item Start */}
              <div className="service-item wow fadeInUp">
                {/* Service Image Start */}
                <div className="service-image">
                  <a href="service-single.html" data-cursor-text="View">
                    <figure className="image-anime">
                      <img src="images/service-1.jpg" alt="" />
                    </figure>
                  </a>
                </div>
                {/* Service Image End */}
                {/* Service Button Start */}
                <div className="service-btn">
                  <a href="service-single.html">
                    <img src="images/arrow-white.svg" alt="" />
                  </a>
                </div>
                {/* Service Button End */}
                {/* Service Content Start */}
                <div className="service-content">
                  <h3>
                    <a href="service-single.html">residential interior design</a>
                  </h3>
                  <p>
                    We create personalized living spaces that reflect your style and
                    functional needs.
                  </p>
                </div>
                {/* Service Content End */}
              </div>
              {/* Service Item End */}
            </div>
            <div className="col-lg-4 col-md-6">
              {/* Service Item Start */}
              <div className="service-item wow fadeInUp" data-wow-delay="0.2s">
                {/* Service Image Start */}
                <div className="service-image">
                  <a href="service-single.html" data-cursor-text="View">
                    <figure className="image-anime">
                      <img src="images/service-2.jpg" alt="" />
                    </figure>
                  </a>
                </div>
                {/* Service Image End */}
                {/* Service Button Start */}
                <div className="service-btn">
                  <a href="service-single.html">
                    <img src="images/arrow-white.svg" alt="" />
                  </a>
                </div>
                {/* Service Button End */}
                {/* Service Content Start */}
                <div className="service-content">
                  <h3>
                    <a href="service-single.html">commercial interior design</a>
                  </h3>
                  <p>
                    Enhancing business environments with professional, functional,
                    and aesthetically.
                  </p>
                </div>
                {/* Service Content End */}
              </div>
              {/* Service Item End */}
            </div>
            <div className="col-lg-4 col-md-6">
              {/* Service Item Start */}
              <div className="service-item wow fadeInUp" data-wow-delay="0.4s">
                {/* Service Image Start */}
                <div className="service-image">
                  <a href="service-single.html" data-cursor-text="View">
                    <figure className="image-anime">
                      <img src="images/service-3.jpg" alt="" />
                    </figure>
                  </a>
                </div>
                {/* Service Image End */}
                {/* Service Button Start */}
                <div className="service-btn">
                  <a href="service-single.html">
                    <img src="images/arrow-white.svg" alt="" />
                  </a>
                </div>
                {/* Service Button End */}
                {/* Service Content Start */}
                <div className="service-content">
                  <h3>
                    <a href="service-single.html">furniture and decor selection</a>
                  </h3>
                  <p>
                    Our experts help you choose the perfect furniture and decor
                    complement your style.
                  </p>
                </div>
                {/* Service Content End */}
              </div>
              {/* Service Item End */}
            </div>
            <div className="col-lg-12">
              {/* All Services Button Start */}
              <div className="all-services-btn wow fadeInUp" data-wow-delay="0.6s">
                <a href="services.html" className="btn-default">
                  see all services
                </a>
              </div>
              {/* All Services Button End */}
            </div>
          </div>
        </div>
      </div>
      {/* Our Services Section End */}
      {/* Intro Video Section Start */}
      <div className="intro-video">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              {/* Intro Video Image Start */}
              <div className="intro-video-box">
                {/* Intro Image Start */}
                <div className="intro-video-image">
                  <a
                    href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                    className="popup-video"
                    data-cursor-text="Play"
                  >
                    <figure className="image-anime">
                      <img src="images/intro-video-bg.jpg" alt="" />
                    </figure>
                  </a>
                </div>
                {/* Intro Image End */}
                {/* Video Play Button Start */}
                <div className="video-play-button">
                  <a
                    href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                    className="popup-video"
                    data-cursor-text="Play"
                  >
                    play
                  </a>
                </div>
                {/* Video Play Button End */}
              </div>
              {/* Intro Video Btn End */}
            </div>
          </div>
        </div>
      </div>
      {/* Intro Video Section End */}
      {/* Our Project Start */}
      <div className="our-project">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-5">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">latest project</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Creative projects that define<span> our style</span>
                </h2>
              </div>
              {/* Section Title End */}
            </div>
            <div className="col-lg-7">
              {/* Section Title Content Start */}
              <div className="section-title-content">
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  Our portfolio showcases a diverse range of projects, from
                  beautifully crafted residential spaces functional and stylish
                  commercial interiors
                </p>
              </div>
              {/* Section Title Content End */}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {/* Our Project Nav start */}
              <div className="our-Project-nav wow fadeInUp" data-wow-delay="0.4s">
                <ul>
                  <li>
                    <a href="#" className="active-btn" data-filter="*">
                      all
                    </a>
                  </li>
                  <li>
                    <a href="#" data-filter=".architecture">
                      architecture
                    </a>
                  </li>
                  <li>
                    <a href="#" data-filter=".interior">
                      interior
                    </a>
                  </li>
                  <li>
                    <a href="#" data-filter=".bedroom">
                      bedroom
                    </a>
                  </li>
                  <li>
                    <a href="#" data-filter=".furniture">
                      furniture
                    </a>
                  </li>
                  <li>
                    <a href="#" data-filter=".kitchen">
                      kitchen
                    </a>
                  </li>
                </ul>
              </div>
              {/* Our Project Nav End */}
            </div>
            <div className="col-lg-12">
              {/* Project Item Boxes start */}
              <div className="row project-item-boxes align-items-center">
                <div className="col-md-6 project-item-box architecture bedroom">
                  {/* Project Item Start */}
                  <div className="project-item wow fadeInUp">
                    <div className="project-image">
                      <div className="project-featured-image">
                        <figure className="image-anime">
                          <img src="images/project-1.jpg" alt="" />
                        </figure>
                      </div>
                      <div className="project-btn">
                        <a href="project-single.html">
                          <img src="images/arrow-white.svg" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="project-content">
                      <h3>residential spaces</h3>
                      <h2>
                        <a href="project-single.html">
                          urban retreat: modern design meets comfort
                        </a>
                      </h2>
                    </div>
                  </div>
                  {/* Project Item End */}
                </div>
                <div className="col-md-6 project-item-box interior kitchen">
                  {/* Project Item Start */}
                  <div className="project-item wow fadeInUp" data-wow-delay="0.2s">
                    <div className="project-image">
                      <div className="project-featured-image">
                        <figure className="image-anime">
                          <img src="images/project-2.jpg" alt="" />
                        </figure>
                      </div>
                      <div className="project-btn">
                        <a href="project-single.html">
                          <img src="images/arrow-white.svg" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="project-content">
                      <h3>luxury homes</h3>
                      <h2>
                        <a href="project-single.html">
                          luxurious loft: industrial chic for living
                        </a>
                      </h2>
                    </div>
                  </div>
                  {/* Project Item End */}
                </div>
                <div className="col-md-6 project-item-box furniture architecture">
                  {/* Project Item Start */}
                  <div className="project-item wow fadeInUp" data-wow-delay="0.4s">
                    <div className="project-image">
                      <div className="project-featured-image">
                        <figure className="image-anime">
                          <img src="images/project-3.jpg" alt="" />
                        </figure>
                      </div>
                      <div className="project-btn">
                        <a href="project-single.html">
                          <img src="images/arrow-white.svg" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="project-content">
                      <h3>outdoor living spaces</h3>
                      <h2>
                        <a href="project-single.html">
                          coastal vibes: serenity by the sea
                        </a>
                      </h2>
                    </div>
                  </div>
                  {/* Project Item End */}
                </div>
                <div className="col-md-6 project-item-box kitchen bedroom">
                  {/* Project Item Start */}
                  <div className="project-item wow fadeInUp" data-wow-delay="0.6s">
                    <div className="project-image">
                      <div className="project-featured-image">
                        <figure className="image-anime">
                          <img src="images/project-4.jpg" alt="" />
                        </figure>
                      </div>
                      <div className="project-btn">
                        <a href="project-single.html">
                          <img src="images/arrow-white.svg" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="project-content">
                      <h3>modern designs</h3>
                      <h2>
                        <a href="project-single.html">
                          minimalist haven: simple, clean, inviting spaces
                        </a>
                      </h2>
                    </div>
                  </div>
                  {/* Project Item End */}
                </div>
              </div>
              {/* Project Item Boxes End */}
            </div>
          </div>
        </div>
      </div>
      {/* Our Project End */}
      {/* How We Work Start */}
      <div className="how-we-work">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-6">
              {/* Section Title Start */}
              <div className="section-title dark-section">
                <h3 className="wow fadeInUp">how we work</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  From concept to completion in<span> our work</span>
                </h2>
              </div>
              {/* Section Title End */}
            </div>
            <div className="col-lg-6">
              {/* Section Title Content Start */}
              <div className="section-title-content dark-section">
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  Our comprehensive approach guides you through each phase of the
                  design process, from initial brainstorming and conceptualization.
                </p>
              </div>
              {/* Section Title Content End */}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {/* How We Work List Start */}
              <div className="how-we-work-list">
                {/* How We Item Start */}
                <div className="how-we-work-item wow fadeInUp">
                  <div className="icon-box">
                    <img src="images/icon-how-we-work-1.svg" alt="" />
                  </div>
                  <div className="how-we-work-content">
                    <h3>01. initial consultation</h3>
                    <p>
                      We start with a one-on meeting to understand your vision
                      preferences and requirement.
                    </p>
                  </div>
                </div>
                {/* How We Item End */}
                {/* How We Item Start */}
                <div
                  className="how-we-work-item wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="icon-box">
                    <img src="images/icon-how-we-work-2.svg" alt="" />
                  </div>
                  <div className="how-we-work-content">
                    <h3>02. design planning</h3>
                    <p>
                      This involves selecting materials, and layouts, furnishings,
                      as well as creating 3D renderings.
                    </p>
                  </div>
                </div>
                {/* How We Item End */}
                {/* How We Item Start */}
                <div
                  className="how-we-work-item wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div className="icon-box">
                    <img src="images/icon-how-we-work-3.svg" alt="" />
                  </div>
                  <div className="how-we-work-content">
                    <h3>03. project execution</h3>
                    <p>
                      With the design plans in this place, we manage and coordinate
                      all aspects of the projects.
                    </p>
                  </div>
                </div>
                {/* How We Item End */}
                {/* How We Item Start */}
                <div
                  className="how-we-work-item wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <div className="icon-box">
                    <img src="images/icon-how-we-work-4.svg" alt="" />
                  </div>
                  <div className="how-we-work-content">
                    <h3>04. final review</h3>
                    <p>
                      After completing project we conduct a thorough walkthrough
                      with you to review the space.
                    </p>
                  </div>
                </div>
                {/* How We Item End */}
              </div>
              {/* How We Work List End */}
              {/* How Work Company Slider Start */}
              <div className="how-work-company-slider">
                <div className="swiper">
                  <div className="swiper-wrapper">
                    {/* Company Support Logo Start */}
                    <div className="swiper-slide">
                      <div className="company-logo">
                        <img src="images/company-logo-1.svg" alt="" />
                      </div>
                    </div>
                    {/* Company Support Logo End */}
                    {/* Company Support Logo Start */}
                    <div className="swiper-slide">
                      <div className="company-logo">
                        <img src="images/company-logo-2.svg" alt="" />
                      </div>
                    </div>
                    {/* Company Support Logo End */}
                    {/* Company Support Logo Start */}
                    <div className="swiper-slide">
                      <div className="company-logo">
                        <img src="images/company-logo-3.svg" alt="" />
                      </div>
                    </div>
                    {/* Company Support Logo End */}
                    {/* Company Support Logo Start */}
                    <div className="swiper-slide">
                      <div className="company-logo">
                        <img src="images/company-logo-4.svg" alt="" />
                      </div>
                    </div>
                    {/* Company Support Logo End */}
                    {/* Company Support Logo Start */}
                    <div className="swiper-slide">
                      <div className="company-logo">
                        <img src="images/company-logo-5.svg" alt="" />
                      </div>
                    </div>
                    {/* Company Support Logo End */}
                    {/* Company Support Logo Start */}
                    <div className="swiper-slide">
                      <div className="company-logo">
                        <img src="images/company-logo-1.svg" alt="" />
                      </div>
                    </div>
                    {/* Company Support Logo End */}
                  </div>
                </div>
              </div>
              {/* How Work Company Slider End */}
            </div>
          </div>
        </div>
      </div>
      {/* How We Work End */}
      {/* Our Testimonial Start */}
      <div className="our-testimonials">
        <div className="container-fluid">
          <div className="row no-gutters">
            <div className="col-lg-6">
              {/* Our Testimonial Image Start */}
              <div className="our-testimonials-image">
                <figure className="image-anime">
                  <img src="images/testimonial-img.jpg" alt="" />
                </figure>
              </div>
              {/* Our Testimonial Image End */}
            </div>
            <div className="col-lg-6">
              {/* Our Testimonial Content Start */}
              <div className="our-testimonial-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <h3 className="wow fadeInUp">client testimonials</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    Trusted by thousand of <span>people &amp; companies.</span>
                  </h2>
                </div>
                {/* Section Title End */}
                {/* Testimonial Slider Start */}
                <div className="testimonial-slider">
                  <div className="swiper">
                    <div className="swiper-wrapper" data-cursor-text="Drag">
                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <div className="testimonial-rating">
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                          </div>
                          <div className="testimonial-body">
                            <div className="testimonial-content">
                              <p>
                                I couldn't be happier with the transformation of my
                                home! From our very first consultation, the team at
                                took the time to understand my vision and
                                preferences.
                              </p>
                            </div>
                          </div>
                          <div className="testimonial-body">
                            <div className="author-image">
                              <figure className="image-anime">
                                <img src="images/author-1.jpg" alt="" />
                              </figure>
                            </div>
                            <div className="author-content">
                              <h3>arlene mcCoy</h3>
                              <p>co. founder</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Testimonial Slide End */}
                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <div className="testimonial-rating">
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                          </div>
                          <div className="testimonial-content">
                            <p>
                              I couldn't be happier with the transformation of my
                              home! From our very first consultation, the team at
                              took the time to understand my vision and preferences.
                            </p>
                          </div>
                          <div className="testimonial-body">
                            <div className="author-image">
                              <figure className="image-anime">
                                <img src="images/author-1.jpg" alt="" />
                              </figure>
                            </div>
                            <div className="author-content">
                              <h3>arlene mcCoy</h3>
                              <p>co founder</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Testimonial Slide End */}
                    </div>
                  </div>
                </div>
                {/* Testimonial Slider End */}
                {/* Testimonial Rating Counter Start */}
                <div className="testimonial-rating-counter">
                  <div className="rating-counter">
                    <h2>
                      <span className="counter">4.82</span>
                    </h2>
                  </div>
                  <div className="testimonial-rating-content">
                    <div className="testimonial-client-rating">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                    <p>2,488 reviews</p>
                  </div>
                </div>
                {/* Testimonial Rating Counter End */}
              </div>
              {/* Our Testimonial Content End */}
            </div>
          </div>
        </div>
      </div>
      {/* Our Testimonial End */}
      {/* Our Blog Section Start */}
      <div className="our-blog">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-6">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">latest news</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  <span>Your guide to</span> inspired interiors
                </h2>
              </div>
              {/* Section Title End */}
            </div>
            <div className="col-lg-6">
              {/* Section Title Content Start */}
              <div className="section-title-content">
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  Your journey to inspired interiors begins here. Our blog offers a
                  wealth of resources, including design tips, trend analyses.
                </p>
              </div>
              {/* Section Title Content End */}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              {/* Post Item Start */}
              <div className="post-item wow fadeInUp">
                {/* Post Featured Image Start*/}
                <div className="post-featured-image">
                  <figure>
                    <a
                      href="blog-single.html"
                      className="image-anime"
                      data-cursor-text="View"
                    >
                      <img src="images/post-1.jpg" alt="" />
                    </a>
                  </figure>
                </div>
                {/* Post Featured Image End */}
                {/* Post Item Body Start */}
                <div className="post-item-body">
                  {/* Post Item Content Start */}
                  <div className="post-item-content">
                    <h3>
                      <a href="blog-single.html">
                        How Does One Go About a Buying Furniture?
                      </a>
                    </h3>
                  </div>
                  {/* Post Item Content End */}
                  {/* Blog Item Button Start */}
                  <div className="post-item-btn">
                    <a href="blog-single.html" className="post-btn">
                      read more
                    </a>
                  </div>
                  {/* Blog Item Button End */}
                </div>
                {/* Post Item Body End */}
              </div>
              {/* Post Item End */}
            </div>
            <div className="col-lg-4 col-md-6">
              {/* Post Item Start */}
              <div className="post-item wow fadeInUp" data-wow-delay="0.2s">
                {/* Post Featured Image Start*/}
                <div className="post-featured-image">
                  <figure>
                    <a
                      href="blog-single.html"
                      className="image-anime"
                      data-cursor-text="View"
                    >
                      <img src="images/post-2.jpg" alt="" />
                    </a>
                  </figure>
                </div>
                {/* Post Featured Image End */}
                {/* Post Item Body Start */}
                <div className="post-item-body">
                  {/* Post Item Content Start */}
                  <div className="post-item-content">
                    <h3>
                      <a href="blog-single.html">
                        Innovative Décor Ideas Shaping Homes Today
                      </a>
                    </h3>
                  </div>
                  {/* Post Item Content End */}
                  {/* Blog Item Button Start */}
                  <div className="post-item-btn">
                    <a href="blog-single.html" className="post-btn">
                      read more
                    </a>
                  </div>
                  {/* Blog Item Button End */}
                </div>
                {/* Post Item Body End */}
              </div>
              {/* Post Item End */}
            </div>
            <div className="col-lg-4 col-md-6">
              {/* Post Item Start */}
              <div className="post-item wow fadeInUp" data-wow-delay="0.4s">
                {/* Post Featured Image Start*/}
                <div className="post-featured-image">
                  <figure>
                    <a
                      href="blog-single.html"
                      className="image-anime"
                      data-cursor-text="View"
                    >
                      <img src="images/post-3.jpg" alt="" />
                    </a>
                  </figure>
                </div>
                {/* Post Featured Image End */}
                {/* Post Item Body Start */}
                <div className="post-item-body">
                  {/* Post Item Content Start */}
                  <div className="post-item-content">
                    <h3>
                      <a href="blog-single.html">
                        Design Industry Updates You Should Know About
                      </a>
                    </h3>
                  </div>
                  {/* Post Item Content End */}
                  {/* Blog Item Button Start */}
                  <div className="post-item-btn">
                    <a href="blog-single.html" className="post-btn">
                      read more
                    </a>
                  </div>
                  {/* Blog Item Button End */}
                </div>
                {/* Post Item Body End */}
              </div>
              {/* Post Item End */}
            </div>
            <div className="col-lg-12">
              {/* Our Blog Footer Start */}
              <div className="our-blog-footer wow fadeInUp" data-wow-delay="0.6s">
                <a href="blog.html" className="btn-default">
                  See All Blogs
                </a>
              </div>
              {/* Our Blog Footer End */}
            </div>
          </div>
        </div>
      </div>
      {/* Our Blog Section End */}
    </>

  )
}

export default page