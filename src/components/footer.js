import React from 'react';
import Vector from '../images/Vector.png'
import Vector1 from '../images/Vector(1).png'
import Vector2 from '../images/Vector(2).png'
import Vector3 from '../images/Vector(3).png'
import Vector4 from '../images/Vector(4).png'

  
const Footer = () => {
    return (
        <div className="footer">
            <div className="images-container">
                <img src={Vector} alt="vector1" className='vector1' key={Vector}/>
                <img src={Vector1} alt="vector2" className='vector2' key={Vector1}/>
                <img src={Vector2} alt="vector3" className='vector3' key={Vector2}/>
                <img src={Vector3} alt="vector4" className='vector4' key={Vector3}/>
                <img src={Vector4} alt="vector5" className='vector5' key={Vector4}/>
            </div>
        </div>
    );
}




export default Footer;
