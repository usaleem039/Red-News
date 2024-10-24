/* eslint-disable no-unused-vars */
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-red-600 text-white py-2 fixed bottom-0 w-full">
            <div className="container text-center">
                <p className="text-sm">&copy; 2024 Red-News. All Rights Reserved.</p>

                <div className="mt-2">
                    <a href="/about" className="text-gray-400 hover:text-white mx-3">
                        About Us
                    </a>
                    <a href="/contact" className="text-gray-400 hover:text-white mx-3">
                        Contact
                    </a>
                    <a href="/privacy" className="text-gray-400 hover:text-white mx-3">
                        Privacy Policy
                    </a>
                    <a href="/terms" className="text-gray-400 hover:text-white mx-3">
                        Terms of Service
                    </a>
                </div>

                
            </div>
        </footer>
    );
};

export default Footer;
