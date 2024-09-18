import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">About Us</h1>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-8">
          Welcome to QubExpress! We are a fast-growing delivery service that connects local businesses and customers with reliable delivery solutions. Our mission is to simplify the way packages are delivered while supporting local economies and ensuring the best service for both businesses and end consumers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              We aim to become the leading delivery service across the region, empowering small businesses and individuals to send and receive goods quickly and affordably. We believe that seamless delivery is key to the growth of a thriving business environment.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Why Choose Us?</h2>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Reliable and fast delivery</li>
              <li>Support for local businesses</li>
              <li>Affordable delivery rates</li>
              <li>Excellent customer support</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Meet the Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4 bg-white rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 1"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h4 className="text-lg font-semibold text-gray-800">John Doe</h4>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 2"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h4 className="text-lg font-semibold text-gray-800">Jane Smith</h4>
              <p className="text-gray-600">COO</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 3"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h4 className="text-lg font-semibold text-gray-800">Sam Wilson</h4>
              <p className="text-gray-600">Head of Operations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
