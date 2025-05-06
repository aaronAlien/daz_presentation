import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="fixed bottom-0 w-full flex justify-around items-center py-3">
            <a
                href="https://github.com/aaronAlien"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-blue-600 transition-colors duration-300 ease-in-out"
            >
                <FaGithub size={24} />
            </a>
            <a
                href="https://www.linkedin.com/in/aaron-shakespeare/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-blue-600 transition-colors duration-300 ease-in-out"
            >
                <FaLinkedin size={24} />
            </a>
            <a
                href="mailto:thatshakespeare2@gmail.com"
                className="text-black hover:text-blue-600 transition-colors duration-300 ease-in-out"
            >
                <FaEnvelope size={24} />
            </a>
        </footer>
    );
};

export default Footer;
