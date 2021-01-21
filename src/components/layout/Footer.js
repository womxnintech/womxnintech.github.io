import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-10 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">About Us</h2>
        <p className="mt-5">The Womxn in Tech Conference is a virtual conference organized by the Office of ASUC Senator Prakash. The goal of this conference is to provide more recruitment opportunities for womxn and promote female representation within tech. In addition to supporting womxn in tech, our office also has initiatives to promote diverse STEM recruiting in clubs, menstrual equity, and mitigating risk management. </p>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Important Links</h2>
        <ul className="mt-4 leading-loose">
        <li>
            <a href="https://fb.me/e/X3HhUGvc" target="_blank" rel="noopener noreferrer">Facebook Event</a>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Social Media</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://www.facebook.com/ApoorvaPrakash2020" target="_blank" rel="noopener noreferrer"> Facebook</a>
          </li>
          <li>
            <a href="https://www.instagram.com/asucsenatorprakash/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
