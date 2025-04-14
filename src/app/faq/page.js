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
                                    Frequently asked question
                                </h1>
                            </div>
                            {/* Page Header Box End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Page Header End */}
            {/* Page Faqs Start */}
            <div className="page-faqs">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="page-faqs-catagery">
                                {/* FAQs section start */}
                                <div
                                    className="our-faq-section page-faq-accordion"
                                    id="general_information"
                                >
                                    <div className="section-title">
                                        <h2 className="text-anime-style-2" data-cursor="-opaque">
                                            General information
                                        </h2>
                                    </div>
                                    {/* FAQ Accordion Start */}
                                    <div className="faq-accordion" id="accordion">
                                        {/* FAQ Item Start */}
                                        <div className="accordion-item wow fadeInUp">
                                            <h2 className="accordion-header" id="heading1">
                                                <button
                                                    className="accordion-button"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapse1"
                                                    aria-expanded="true"
                                                    aria-controls="collapse1"
                                                >
                                                    <span>1.</span> What is the typical process for starting a
                                                    design project?
                                                </button>
                                            </h2>
                                            <div
                                                id="collapse1"
                                                className="accordion-collapse collapse show"
                                                aria-labelledby="heading1"
                                                data-bs-parent="#accordion"
                                            >
                                                <div className="accordion-body">
                                                    <p>
                                                        Our interior design agency offers services such as
                                                        residential and commercial design, space planning,
                                                        furniture selection, lighting design, color
                                                        consultation, and custom renovations.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* FAQ Item End */}
                                        {/* FAQ Item Start */}
                                        <div
                                            className="accordion-item wow fadeInUp"
                                            data-wow-delay="0.2s"
                                        >
                                            <h2 className="accordion-header" id="heading2">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapse2"
                                                    aria-expanded="false"
                                                    aria-controls="collapse2"
                                                >
                                                    <span>2.</span> How do you ensure the design aligns with
                                                    my vision?
                                                </button>
                                            </h2>
                                            <div
                                                id="collapse2"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="heading2"
                                                data-bs-parent="#accordion"
                                            >
                                                <div className="accordion-body">
                                                    <p>
                                                        Our interior design agency offers services such as
                                                        residential and commercial design, space planning,
                                                        furniture selection, lighting design, color
                                                        consultation, and custom renovations.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* FAQ Item End */}
                                        {/* FAQ Item Start */}
                                        <div
                                            className="accordion-item wow fadeInUp"
                                            data-wow-delay="0.4s"
                                        >
                                            <h2 className="accordion-header" id="heading3">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapse3"
                                                    aria-expanded="false"
                                                    aria-controls="collapse3"
                                                >
                                                    <span>3.</span> What is your typical project timeline?
                                                </button>
                                            </h2>
                                            <div
                                                id="collapse3"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="heading3"
                                                data-bs-parent="#accordion"
                                            >
                                                <div className="accordion-body">
                                                    <p>
                                                        Our interior design agency offers services such as
                                                        residential and commercial design, space planning,
                                                        furniture selection, lighting design, color
                                                        consultation, and custom renovations.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* FAQ Item End */}
                                        {/* FAQ Item Start */}
                                        <div
                                            className="accordion-item wow fadeInUp"
                                            data-wow-delay="0.6s"
                                        >
                                            <h2 className="accordion-header" id="heading4">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapse4"
                                                    aria-expanded="false"
                                                    aria-controls="collapse4"
                                                >
                                                    <span>4.</span> How can I prepare my space for a design
                                                    project?
                                                </button>
                                            </h2>
                                            <div
                                                id="collapse4"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="heading4"
                                                data-bs-parent="#accordion"
                                            >
                                                <div className="accordion-body">
                                                    <p>
                                                        Our interior design agency offers services such as
                                                        residential and commercial design, space planning,
                                                        furniture selection, lighting design, color
                                                        consultation, and custom renovations.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* FAQ Item End */}
                                        {/* FAQ Item Start */}
                                        <div
                                            className="accordion-item wow fadeInUp"
                                            data-wow-delay="0.8s"
                                        >
                                            <h2 className="accordion-header" id="heading5">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapse5"
                                                    aria-expanded="false"
                                                    aria-controls="collapse5"
                                                >
                                                    <span>5.</span> Do you work with sustainable or
                                                    eco-friendly materials?
                                                </button>
                                            </h2>
                                            <div
                                                id="collapse5"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="heading5"
                                                data-bs-parent="#accordion"
                                            >
                                                <div className="accordion-body">
                                                    <p>
                                                        Our interior design agency offers services such as
                                                        residential and commercial design, space planning,
                                                        furniture selection, lighting design, color
                                                        consultation, and custom renovations.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* FAQ Item End */}
                                    </div>
                                    {/* FAQ Accordion End */}
                                </div>
                                {/* FAQs section End */}
                                {/* FAQs section start */}
                                <div
                                    className="our-faq-section page-faq-accordion"
                                    id="design_process"
                                >
                                    <div className="section-title">
                                        <h2 className="text-anime-style-2" data-cursor="-opaque">
                                            Design Process
                                        </h2>
                                    </div>
                                    {/* FAQ Accordion Start */}
                                    <div className="faq-accordion" id="accordion1">
                                        {/* FAQ Item Start */}
                                        <div className="accordion-item wow fadeInUp">
                                            <h2 className="accordion-header" id="heading6">
                                                <button
                                                    className="accordion-button"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapse6"
                                                    aria-expanded="true"
                                                    aria-controls="collapse6"
                                                >
                                                    <span>1.</span> What is the first step in the design
                                                    process?
                                                </button>
                                            </h2>
                                            <div
                                                id="collapse6"
                                                className="accordion-collapse collapse show"
                                                aria-labelledby="heading6"
                                                data-bs-parent="#accordion1"
                                            >
                                                <div className="accordion-body">
                                                    <p>
                                                        Our design process begins with an in-depth consultation
                                                        to understand your vision, style preferences, and
                                                        specific requirements, setting the foundation for a
                                                        tailored design.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* FAQ Item End */}
                                        {/* FAQ Item Start */}
                                        <div
                                            className="accordion-item wow fadeInUp"
                                            data-wow-delay="0.2s"
                                        >
                                            <h2 className="accordion-header" id="heading7">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapse7"
                                                    aria-expanded="false"
                                                    aria-controls="collapse7"
                                                >
                                                    <span>2.</span> Will I see design concepts before final
                                                    decisions are made?
                                                </button>
                                            </h2>
                                            <div
                                                id="collapse7"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="heading7"
                                                data-bs-parent="#accordion1"
                                            >
                                                <div className="accordion-body">
                                                    <p>
                                                        Our design process begins with an in-depth consultation
                                                        to understand your vision, style preferences, and
                                                        specific requirements, setting the foundation for a
                                                        tailored design.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* FAQ Item End */}
                                        {/* FAQ Item Start */}
                                        <div
                                            className="accordion-item wow fadeInUp"
                                            data-wow-delay="0.4s"
                                        >
                                            <h2 className="accordion-header" id="heading8">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapse8"
                                                    aria-expanded="false"
                                                    aria-controls="collapse8"
                                                >
                                                    <span>3.</span> How involved can I be in the design
                                                    process?
                                                </button>
                                            </h2>
                                            <div
                                                id="collapse8"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="heading8"
                                                data-bs-parent="#accordion1"
                                            >
                                                <div className="accordion-body">
                                                    <p>
                                                        Our design process begins with an in-depth consultation
                                                        to understand your vision, style preferences, and
                                                        specific requirements, setting the foundation for a
                                                        tailored design.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* FAQ Item End */}
                                        {/* FAQ Item Start */}
                                        <div
                                            className="accordion-item wow fadeInUp"
                                            data-wow-delay="0.6s"
                                        >
                                            <h2 className="accordion-header" id="heading9">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapse9"
                                                    aria-expanded="true"
                                                    aria-controls="collapse9"
                                                >
                                                    <span>4.</span> Do you manage all aspects of the project?
                                                </button>
                                            </h2>
                                            <div
                                                id="collapse9"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="heading9"
                                                data-bs-parent="#accordion1"
                                            >
                                                <div className="accordion-body">
                                                    <p>
                                                        Our design process begins with an in-depth consultation
                                                        to understand your vision, style preferences, and
                                                        specific requirements, setting the foundation for a
                                                        tailored design.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* FAQ Item End */}
                                        {/* FAQ Item Start */}
                                        <div
                                            className="accordion-item wow fadeInUp"
                                            data-wow-delay="0.8s"
                                        >
                                            <h2 className="accordion-header" id="heading10">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapse10"
                                                    aria-expanded="false"
                                                    aria-controls="collapse10"
                                                >
                                                    <span>5.</span> Can you incorporate existing furniture or
                                                    decor into the new design?
                                                </button>
                                            </h2>
                                            <div
                                                id="collapse10"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="heading10"
                                                data-bs-parent="#accordion1"
                                            >
                                                <div className="accordion-body">
                                                    <p>
                                                        Our design process begins with an in-depth consultation
                                                        to understand your vision, style preferences, and
                                                        specific requirements, setting the foundation for a
                                                        tailored design.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* FAQ Item End */}
                                    </div>
                                    {/* FAQ Accordion End */}
                                </div>
                                {/* FAQs section End */}
                                {/* FAQs section start */}
                                <div
                                    className="our-faq-section page-faq-accordion"
                                    id="project_completion"
                                >
                                    <div className="section-title">
                                        <h2 className="text-anime-style-2" data-cursor="-opaque">
                                            Project completion
                                        </h2>
                                    </div>
                                    {/* FAQ Accordion Start */}
                                    <div className="faq-accordion" id="accordion2">
                                        {/* FAQ Item Start */}
                                        <div className="accordion-item wow fadeInUp">
                                            <h2 className="accordion-header" id="heading11">
                                                <button
                                                    className="accordion-button"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapse11"
                                                    aria-expanded="false"
                                                    aria-controls="collapse11"
                                                >
                                                    <span>1.</span> How do you ensure the project is completed
                                                    on time?
                                                </button>
                                            </h2>
                                            <div
                                                id="collapse11"
                                                className="accordion-collapse collapse show"
                                                aria-labelledby="heading11"
                                                data-bs-parent="#accordion2"
                                            >
                                                <div className="accordion-body">
                                                    <p>
                                                        We provide a detailed project timeline, ensuring each
                                                        phase is completed on schedule. Our team monitors
                                                        progress regularly, addressing challenges promptly to
                                                        minimize delays.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* FAQ Item End */}
                                        {/* FAQ Item Start */}
                                        <div
                                            className="accordion-item wow fadeInUp"
                                            data-wow-delay="0.2s"
                                        >
                                            <h2 className="accordion-header" id="heading12">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapse12"
                                                    aria-expanded="true"
                                                    aria-controls="collapse12"
                                                >
                                                    <span>2.</span> Will I be involved in the final stages of
                                                    the project?
                                                </button>
                                            </h2>
                                            <div
                                                id="collapse12"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="heading12"
                                                data-bs-parent="#accordion2"
                                            >
                                                <div className="accordion-body">
                                                    <p>
                                                        We provide a detailed project timeline, ensuring each
                                                        phase is completed on schedule. Our team monitors
                                                        progress regularly, addressing challenges promptly to
                                                        minimize delays.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* FAQ Item End */}
                                        {/* FAQ Item Start */}
                                        <div
                                            className="accordion-item wow fadeInUp"
                                            data-wow-delay="0.4s"
                                        >
                                            <h2 className="accordion-header" id="heading13">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapse13"
                                                    aria-expanded="false"
                                                    aria-controls="collapse13"
                                                >
                                                    <span>3.</span> How do you handle any changes or
                                                    adjustments during the project?
                                                </button>
                                            </h2>
                                            <div
                                                id="collapse13"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="heading13"
                                                data-bs-parent="#accordion2"
                                            >
                                                <div className="accordion-body">
                                                    <p>
                                                        We provide a detailed project timeline, ensuring each
                                                        phase is completed on schedule. Our team monitors
                                                        progress regularly, addressing challenges promptly to
                                                        minimize delays.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* FAQ Item End */}
                                        {/* FAQ Item Start */}
                                        <div
                                            className="accordion-item wow fadeInUp"
                                            data-wow-delay="0.6s"
                                        >
                                            <h2 className="accordion-header" id="heading14">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapse14"
                                                    aria-expanded="true"
                                                    aria-controls="collapse14"
                                                >
                                                    <span>4.</span> How do I know if the design is fully
                                                    implemented as planned?
                                                </button>
                                            </h2>
                                            <div
                                                id="collapse14"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="heading14"
                                                data-bs-parent="#accordion2"
                                            >
                                                <div className="accordion-body">
                                                    <p>
                                                        We provide a detailed project timeline, ensuring each
                                                        phase is completed on schedule. Our team monitors
                                                        progress regularly, addressing challenges promptly to
                                                        minimize delays.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* FAQ Item End */}
                                        {/* FAQ Item Start */}
                                        <div
                                            className="accordion-item wow fadeInUp"
                                            data-wow-delay="0.8s"
                                        >
                                            <h2 className="accordion-header" id="heading15">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapse15"
                                                    aria-expanded="false"
                                                    aria-controls="collapse15"
                                                >
                                                    <span>5.</span> What happens after the project is
                                                    completed?
                                                </button>
                                            </h2>
                                            <div
                                                id="collapse15"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="heading15"
                                                data-bs-parent="#accordion2"
                                            >
                                                <div className="accordion-body">
                                                    <p>
                                                        We provide a detailed project timeline, ensuring each
                                                        phase is completed on schedule. Our team monitors
                                                        progress regularly, addressing challenges promptly to
                                                        minimize delays.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* FAQ Item End */}
                                    </div>
                                    {/* FAQ Accordion End */}
                                </div>
                                {/* FAQs section End */}
                                {/* FAQs section start */}
                                <div
                                    className="our-faq-section page-faq-accordion"
                                    id="design_consultation"
                                >
                                    <div className="section-title">
                                        <h2 className="text-anime-style-2" data-cursor="-opaque">
                                            Design consultation
                                        </h2>
                                    </div>
                                    {/* FAQ Accordion Start */}
                                    <div className="faq-accordion" id="accordion3">
                                        {/* FAQ Item Start */}
                                        <div className="accordion-item wow fadeInUp">
                                            <h2 className="accordion-header" id="heading16">
                                                <button
                                                    className="accordion-button"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapse16"
                                                    aria-expanded="false"
                                                    aria-controls="collapse16"
                                                >
                                                    <span>1.</span> What can I expect during the initial
                                                    consultation?
                                                </button>
                                            </h2>
                                            <div
                                                id="collapse16"
                                                className="accordion-collapse collapse show"
                                                aria-labelledby="heading16"
                                                data-bs-parent="#accordion3"
                                            >
                                                <div className="accordion-body">
                                                    <p>
                                                        During the initial consultation, we'll discuss your
                                                        design goals, preferences, and any specific
                                                        requirements, ensuring we have a clear understanding of
                                                        your vision and how to bring it to life.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* FAQ Item End */}
                                        {/* FAQ Item Start */}
                                        <div
                                            className="accordion-item wow fadeInUp"
                                            data-wow-delay="0.2s"
                                        >
                                            <h2 className="accordion-header" id="heading17">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapse17"
                                                    aria-expanded="false"
                                                    aria-controls="collapse17"
                                                >
                                                    <span>2.</span> Do I need to prepare anything for the
                                                    consultation?
                                                </button>
                                            </h2>
                                            <div
                                                id="collapse17"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="heading17"
                                                data-bs-parent="#accordion3"
                                            >
                                                <div className="accordion-body">
                                                    <p>
                                                        During the initial consultation, we'll discuss your
                                                        design goals, preferences, and any specific
                                                        requirements, ensuring we have a clear understanding of
                                                        your vision and how to bring it to life.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* FAQ Item End */}
                                        {/* FAQ Item Start */}
                                        <div
                                            className="accordion-item wow fadeInUp"
                                            data-wow-delay="0.4s"
                                        >
                                            <h2 className="accordion-header" id="heading18">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapse18"
                                                    aria-expanded="false"
                                                    aria-controls="collapse18"
                                                >
                                                    <span>3.</span> How long does the design consultation
                                                    last?
                                                </button>
                                            </h2>
                                            <div
                                                id="collapse18"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="heading18"
                                                data-bs-parent="#accordion3"
                                            >
                                                <div className="accordion-body">
                                                    <p>
                                                        During the initial consultation, we'll discuss your
                                                        design goals, preferences, and any specific
                                                        requirements, ensuring we have a clear understanding of
                                                        your vision and how to bring it to life.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* FAQ Item End */}
                                        {/* FAQ Item Start */}
                                        <div
                                            className="accordion-item wow fadeInUp"
                                            data-wow-delay="0.6s"
                                        >
                                            <h2 className="accordion-header" id="heading19">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapse19"
                                                    aria-expanded="false"
                                                    aria-controls="collapse19"
                                                >
                                                    <span>4.</span> Is the consultation free of charge?
                                                </button>
                                            </h2>
                                            <div
                                                id="collapse19"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="heading19"
                                                data-bs-parent="#accordion3"
                                            >
                                                <div className="accordion-body">
                                                    <p>
                                                        During the initial consultation, we'll discuss your
                                                        design goals, preferences, and any specific
                                                        requirements, ensuring we have a clear understanding of
                                                        your vision and how to bring it to life.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* FAQ Item End */}
                                    </div>
                                    {/* FAQ Accordion End */}
                                </div>
                                {/* FAQs section End */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Page Faq End */}
        </>

    )
}

export default page