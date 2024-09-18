import React, { useState } from 'react'
import ShowPopup from './ShowPopup';

const TrackingPopup = () => {

const [showPopup, setShowPopup] = useState(false);
const closePopup = () => setShowPopup(false);

  return (
    <>  
        <button onClick={() => setShowPopup(true)} className='bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-5 rounded-r-full'>
            Track now
        </button>
        {showPopup && <ShowPopup closePopup={closePopup}/>}
    </>
  )
}

export default TrackingPopup