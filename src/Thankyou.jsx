import React from 'react'
import App from './App'

const Thankyou = ({ email , setEmailValid }) => {
    const handleReset = () => {
        setEmailValid(false)
    }
    return (
        <>
                <div className='bg-[#37384E] w-screen h-screen flex  justify-center items-center '>
                    <div className=' md:w-[33%] bg-white rounded-3xl md:p-8 '>
                        <img src="./assets/images/icon-success.svg" alt="" />
                        <h1 className='text-4xl font-bold font-[Roborto]'>Thanks for subscribing</h1>
                        <p className='text-gray-700 text-[16px] mt-4'>A confirmation email has been sent to <span className='font-bold'>{email}</span>  Please open it and click the button inside to confirm your subscription.</p>
                        <button onClick={handleReset} className='bg-black p-2 rounded-md mt-5 w-full text-center text-white'>Dismiss message</button>


                    </div>

                </div>
        </>
    )
}

export default Thankyou
