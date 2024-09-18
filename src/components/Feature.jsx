import React from 'react'

const Feature = ({img,width,text1,text2,tw1,tw2}) => {
    return (
        <div className="flex-col justify-centre w-max p-2 md:my-10 my-5 mx-4">
            <div className={`${width}`}>
                <img src={img} className='rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.6)]' alt="" />
            </div>
            <div className='mt-4 text-gray-800/90'>
                <h2 className={`text-center ${tw1} font-semibold tracking-tighter`}>{text1}</h2>
                <h2 className={`text-center ${tw2} font-semibold tracking-tighter`}>{text2}</h2>
            </div>
        </div>
    );
}

export default Feature