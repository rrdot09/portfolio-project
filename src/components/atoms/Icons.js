import React from 'react';
import instagram from '../../images/social-icons/instagram.png'
import twitter from '../../images/social-icons/twitter.png'
import facebook from '../../images/social-icons/facebook.png'
import linkedin from '../../images/social-icons/linkedin.png'
import gmail from '../../images/social-icons/gmail.png'

  
export default function Icons() {
  return (
    <div className="images-container">
      <img
        src={instagram}
        alt="instagram"
        className="instagram icon"
        key={instagram}
      />
      <img src={twitter} alt="twitter" className="twitter icon" key={twitter} />
      <img
        src={facebook}
        alt="facebook"
        className="facebook icon"
        key={facebook}
      />
      <img
        src={linkedin}
        alt="linkedin"
        className="linkedin icon"
        key={linkedin}
      />
      <img src={gmail} alt="gmail" className="gmail icon" key={gmail} />
    </div>
  );
}


