import React, { useState } from 'react';

const Hero = () => {
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [pinCode, setPinCode] = useState('');
  const [error, setError] = useState('');

  // List of valid pin codes where delivery is possible
  const validPinCodes = ['123456', '654321', '789101'];

  const handleCloseStatusModal = () => {
    setShowStatusModal(false);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validPinCodes.includes(pinCode)) {
      setError(`Delivery is not available at pin code ${pinCode}`);
    } else {
      setError(`Delivery is available at pin code ${pinCode}`);
    }

    setShowStatusModal(true);
  };

  return (
    <>
      <section className="bg-gray-900 text-white h-screen flex flex-col justify-start items-center text-center px-4 bg-[url('/src/assets/mobilehero.png')] md:bg-[url('/src/assets/hero.png')] bg-cover bg-center bg-no-repeat">
        <div className="w-full max-w-2xl flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <form onSubmit={handleSubmit} className="w-full md:w-auto flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="text"
              value={pinCode}
              onChange={(e) => setPinCode(e.target.value)}
              placeholder="Enter Pin Code"
              className="w-full md:w-3/4 p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-lg text-black transition-all duration-300 shadow-sm hover:shadow-lg focus:shadow-lg"
              required
            />

            <button
              type="submit"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white font-bold py-2 px-8 rounded-full shadow-xl transform transition-transform duration-300 hover:scale-110 w-full md:w-auto"
            >
              Check Delivery
            </button>
          </form>
        </div>

        <p className="mt-4 text-white font-semibold text-lg">Can't find your pin code?</p>
        <p className="text-yellow-300">Please check if we deliver to your location.</p>
      </section>

      {showStatusModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300 ease-in-out">
          <div className="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 rounded-lg shadow-xl p-10 w-full max-w-lg mx-auto relative transform transition-transform duration-300">
            <button
              onClick={handleCloseStatusModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition-colors duration-300"
              style={{ fontSize: '1.5rem' }}
            >
              ×
            </button>

            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Delivery Status</h2>

            <div className={`text-center ${error.includes('not available') ? 'text-red-500' : 'text-green-500'} text-lg font-semibold`}>
              {error}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
