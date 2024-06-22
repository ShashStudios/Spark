import React from 'react'
import PropTypes from 'prop-types';

interface HeroProps {
    button: string;
    heading: string;
    subheading: string;
    onButtonClick: () => void;
}
const Hero = ({button, heading, subheading, onButtonClick}: HeroProps) => {
  return (
    <div className="hero text-center py-16">
        <div className="hero-content max-w-screen-md mx-auto">
            <div className="max-w-md mx-auto">
            <h1 className="text-5xl font-bold mb-4 text-white">{heading}</h1>
            <p className="mb-6 text-gray-400">{subheading}</p>
            <button className="btn btn-primary" onClick={onButtonClick}>{button}</button>
            </div>
        </div>
    </div>
  )

}
Hero.propTypes = {
    button: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    subheading: PropTypes.string.isRequired,
};

export default Hero;