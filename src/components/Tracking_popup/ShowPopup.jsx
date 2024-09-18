import React from 'react'

const ShowPopup = ({closePopup}) => {
  return (
    <div className="text-black fixed left-0 right-0 top-0 bottom-0 backdrop-blur-md">
        <div className='fixed top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-white'>
            <h2>Tracking Status</h2>
            <button onClick={closePopup} className='bg-yellow-400 px-4 py-1 text-white rounded-md hover:bg-yellow-500'>Close</button>
        </div>
    </div>
  )
}

export default ShowPopup