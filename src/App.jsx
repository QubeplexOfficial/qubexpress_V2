// src/App.jsx
import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import SlidingTextBanner from "./components/SlidingTextBanner/SlidingTextBanner.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Feature from "./components/Feature.jsx";
import Card from "./components/Card/Card.jsx";
import Section4 from "./components/Section4/Section4.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Image1 from './assets/img1.png';
import Image2 from './assets/img2.png';
import Image3 from './assets/img3.png';
import axios from 'axios';
import About from "./components/About/About.jsx";

function App() {
  const [trackingId, setTrackingId] = useState('');
  const [courierDetails, setCourierDetails] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3000/importData/courier/${trackingId}`);
      setCourierDetails(response.data);
      setError('');
    } catch (err) {
      setError('Courier not found');
      setCourierDetails(null);
    }
  };

  return (
    <div>
      <Navbar />
      <SlidingTextBanner />
      <Hero />
      <div className="tracking-section my-8">
        <h2 className="text-center text-3xl font-bold mb-4">Track Your Courier</h2>
        <form onSubmit={handleSubmit} className="flex justify-center mb-4">
          <input
            type="text"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            placeholder="Enter Tracking ID"
            className="p-2 border rounded-md"
            required
          />
          <button type="submit" className="ml-4 p-2 bg-blue-500 text-white rounded-md">Track</button>
        </form>
        {error && <p className="text-center text-red-500">{error}</p>}
        {courierDetails && (
          <div className="courier-details text-center">
            <h3 className="text-xl font-bold">Courier Details</h3>
            <p><strong>Customer ID:</strong> {courierDetails.customer_id}</p>
            {/* <p><strong>Courier Partner:</strong> {courierDetails.courier_partner}</p>
            <p><strong>AWB Number:</strong> {courierDetails.awb_number}</p> */}
            <p><strong>Order Shipped Date:</strong> {courierDetails.order_shipped_date}</p>
            <p><strong>Expected Delivery Date:</strong> {courierDetails.expected_delivery_date}</p>
            <p><strong>Status:</strong> {courierDetails.status}</p>
          </div>
        )}
      </div>
      <div className="hidden md:flex justify-evenly">
        <Feature img={Image1} width="w-[400px]" height="h-[200px]" tw1="text-[2em]" tw2="text-[1.5em]" text1="Speed, Precision, Reliability" text2="We Deliver It All" />
        <Feature img={Image3} width="w-[400px]" height="h-[200px]" tw1="text-[2em]" tw2="text-[1.5em]" text1="AI-enabled Address Engine" text2="Breaking Barriers, Connecting Worlds" />
        <Feature img={Image2} width="w-[400px]" height="h-[200px]" tw1="text-[2em]" tw2="text-[1.5em]" text1="The Courier Service That" text2="Never Sleeps" />
      </div>
      <div className="md:hidden flex flex-col justify-center items-center">
        <Feature img={Image1} width="w-[300px]" height="h-[200px]" tw1="text-[1.5em]" tw2="text-[1em]" text1="Speed, Precision, Reliability" text2="We Deliver It All" />
        <Feature img={Image3} width="w-[300px]" height="h-[200px]" tw1="text-[1.5em]" tw2="text-[1em]" text1="AI-enabled Address Engine" text2="Breaking Barriers, Connecting Worlds" />
        <Feature img={Image2} width="w-[300px]" height="h-[200px]" tw1="text-[1.5em]" tw2="text-[1em]" text1="The Courier Service That" text2="Never Sleeps" />
      </div>
      <Card />
      <Section4 />
      <Footer />
      <About/>
    </div>
  );
}

export default App;
