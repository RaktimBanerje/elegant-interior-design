import React from 'react'

const page = () => {
    return (
        <>
            {/* Page Header Start */}
            <div className="page-header parallaxie">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* Page Header Box Start */}
                            <div className="page-header-box">
                                <h1 className="text-anime-style-2" data-cursor="-opaque">
                                    Conatct us
                                </h1>
                            </div>
                            {/* Page Header Box End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Page Header End */}
            {/* Page Contact Us Start */}
            <div className="page-contact-us">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            {/* Contact Us Image Start */}
                            <div className="contact-us-image">
                                <figure className="image-anime reveal">
                                    <img src="images/contact-us-image.jpg" alt="" />
                                </figure>
                            </div>
                            {/* Contact Us Image End */}
                        </div>
                        <div className="col-lg-6">
                            {/* Contact Us Form Start */}
                            <div className="contact-us-form">
                                {/* Section Title Start */}
                                <div className="section-title">
                                    <h3 className="wow fadeInUp">contact form</h3>
                                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                                        We would love to hear <span>from you</span>
                                    </h2>
                                    <p className="wow fadeInUp" data-wow-delay="0.2s">
                                        Your email address will not be published. Required fields are
                                        marked *
                                    </p>
                                </div>
                                {/* Section Title End */}
                                {/* Contact Form Start */}
                                <div className="contact-form">
                                    {/* Contact Form Start */}
                                    <form
                                        id="contactForm"
                                        action="#"
                                        method="POST"
                                        data-toggle="validator"
                                        className="wow fadeInUp"
                                        data-wow-delay="0.4s"
                                    >
                                        <div className="row">
                                            <div className="form-group col-md-6 mb-4">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    className="form-control"
                                                    id="name"
                                                    placeholder="Name*"
                                                    required=""
                                                />
                                                <div className="help-block with-errors" />
                                            </div>
                                            <div className="form-group col-md-6 mb-4">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    className="form-control"
                                                    id="email"
                                                    placeholder="Email Address*"
                                                    required=""
                                                />
                                                <div className="help-block with-errors" />
                                            </div>
                                            <div className="form-group col-md-12 mb-4">
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    className="form-control"
                                                    id="phone"
                                                    placeholder="Your Phone"
                                                    required=""
                                                />
                                                <div className="help-block with-errors" />
                                            </div>
                                            <div className="form-group col-md-12 mb-5">
                                                <textarea
                                                    name="message"
                                                    className="form-control"
                                                    id="message"
                                                    rows={4}
                                                    placeholder="Your Message"
                                                    defaultValue={""}
                                                />
                                                <div className="help-block with-errors" />
                                            </div>
                                            <div className="col-md-12">
                                                <button type="submit" className="btn-default">
                                                    submit
                                                </button>
                                                <div id="msgSubmit" className="h3 hidden" />
                                            </div>
                                        </div>
                                    </form>
                                    {/* Contact Form End */}
                                </div>
                                {/* Contact Form End */}
                            </div>
                            {/* Contact Us Form End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Page Contact Us End */}
            {/* Google Map Section Start */}
            <div className="google-map">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* Section Title Start */}
                            <div className="section-title">
                                <h3 className="wow fadeInUp">Our contact</h3>
                                <h2 className="text-anime-style-2" data-cursor="-opaque">
                                    Get in touch with us
                                </h2>
                                <p className="wow fadeInUp" data-wow-delay="0.2s">
                                    Get in touch to discuss your employee wellbeing needs today.
                                    Please give us a call, drop us an email or fill out the contact
                                    form and we'll get back to you.
                                </p>
                            </div>
                            {/* Section Title End */}
                        </div>
                        <div className="col-lg-12">
                            {/* Google Map IFrame Start */}
                            <div className="google-map-iframe">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96737.10562045308!2d-74.08535042841811!3d40.739265258395164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1703158537552!5m2!1sen!2sin"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                            {/* Google Map IFrame End */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            {/* Contact Info Box Start */}
                            <div className="contact-info-box">
                                {/* Conatct Info Item Start */}
                                <div className="contact-info-item wow fadeInUp">
                                    {/* Icon Box Start */}
                                    <div className="icon-box">
                                        <i className="fa-solid fa-phone" />
                                    </div>
                                    {/* Icon Box End */}
                                    {/* Contact Info Content Start */}
                                    <div className="contact-info-content">
                                        <h3>phone number</h3>
                                        <p>(+05) 698 - 548 - 6354</p>
                                        <p>(+07) 358 - 879 - 3257</p>
                                    </div>
                                    {/* Contact Info Content End */}
                                </div>
                                {/* Conatct Info Item End */}
                                {/* Conatct Info Item Start */}
                                <div
                                    className="contact-info-item wow fadeInUp"
                                    data-wow-delay="0.2s"
                                >
                                    {/* Icon Box Start */}
                                    <div className="icon-box">
                                        <i className="fa-regular fa-envelope" />
                                    </div>
                                    {/* Icon Box End */}
                                    {/* Contact Info Content Start */}
                                    <div className="contact-info-content">
                                        <h3>e-mail support</h3>
                                        <p>hello@domain12.com</p>
                                        <p>hello@domain12.com</p>
                                    </div>
                                    {/* Contact Info Content End */}
                                </div>
                                {/* Conatct Info Item End */}
                                {/* Conatct Info Item Start */}
                                <div
                                    className="contact-info-item wow fadeInUp"
                                    data-wow-delay="0.4s"
                                >
                                    {/* Icon Box Start */}
                                    <div className="icon-box">
                                        <i className="fa-solid fa-house" />
                                    </div>
                                    {/* Icon Box End */}
                                    {/* Contact Info Content Start */}
                                    <div className="contact-info-content">
                                        <h3>headquarter</h3>
                                        <p>2972 Westheimer Rd. Santa Ana Illinois 85486</p>
                                    </div>
                                    {/* Contact Info Content End */}
                                </div>
                                {/* Conatct Info Item End */}
                            </div>
                            {/* Contact Info Box End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Google Map Section End */}
        </>

    )
}

export default page