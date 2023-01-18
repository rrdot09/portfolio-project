import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Landing = () => {
  return (
    <>
    <Header />

    <div className="landing-page-container">
      <div className="rectangle-container">
        <div className="rectangle"></div>
      </div>
      <div className="content-container">
        <h1 className="title">ONLINE PORTFOLIO</h1>
        <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec libero sollicitudin, tincidunt erat sed, fringilla leo. Phasellus ullamcorper, leo vitae ullamcorper elementum, arcu erat tempus metus, tincidunt cursus odio purus quis diam. In hac habitasse platea dictumst. Integer pretium dignissim dictum. Ut ac ornare nulla. In eget nunc id quam blandit gravida et eget turpis.
        </p>
      </div>
    </div>

    <Footer />
    </>

  );
};

export default Landing;
