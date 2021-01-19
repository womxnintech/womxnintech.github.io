import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">About the ASUC</h2>
        <p className="mt-5">The Associated Students of the University of California (ASUC), is the officially recognized student association at the University of California, Berkeley.</p>
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
            <a href="https://www.facebook.com/ApoorvaPrakash2020" target="_blank" rel="noopener noreferrer"> Facebook Page</a>
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
