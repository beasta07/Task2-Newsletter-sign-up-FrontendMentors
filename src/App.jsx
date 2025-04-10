
import { useState } from 'react';
import './App.css'
import signUpImage from './assets/images/illustration-sign-up-desktop.svg';
import Thankyou from './Thankyou';

function App() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false)
  const [emailValid, setEmailValid] = useState(false);
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  console.log(email)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Button Clicked')
    validateEmail()
  }
  const validateEmail = () => {
    if (!email) {
      setError('Email is required');
    } else if (!emailRegex.test(email)) {
      setError('Please provide a valid email address');
    }
    else {
      setError(null)
      setEmailValid(true)
    }
  }

  return (
    <>
      {emailValid ? (
        <Thankyou email={email} setEmailValid={setEmailValid} />
      ) : (

        <div className='bg-[#37384E] w-screen h-screen flex  justify-center items-center '>
          <div className=' md:w-[53%] bg-white rounded-3xl md:p-8 flex flex-col-reverse md:flex-row  gap-5  items-center '>
            <div className='flex-1 flex-col gap-5 px-5'>
              <h1 className='text-4xl font-bold font-[Roborto]'>Stay updated!</h1>
              <p className='text-gray-700 text-[16px] mt-4'>Join 60,000+ product managers receiving monthly updates on</p>
              <ul className='flex flex-col gap-2 my-6'>
                <li className='flex gap-3'> <img src="../public/assets/images/icon-list.svg" alt="" /> Product discovery and building what matters</li>
                <li className='flex gap-3'> <img src="../public/assets/images/icon-list.svg" alt="" /> Measuring to ensure updates are a success</li>
                <li className='flex gap-3'> <img src="../public/assets/images/icon-list.svg" alt="" /> And much more!</li>

              </ul>
              <div className=''>

                <label for='email' className='text-sm font-medium'>Email address</label>
                {error && <p className='text-red-600 text-sm text-right'>{error}</p>}
                <input placeholder='email@company.com' onChange={(e) => setEmail(e.target.value)} required type="email" id='email' className='border border-gray-300 p-2 w-full mt-2 rounded-md' />
                <button onClick={handleSubmit} className='bg-black p-2 rounded-md mt-5 w-full text-center text-white'>Subscribe to the monthly newsletter</button>
              </div>
            </div>
            <div className='flex-1   h-full flex justify-end '>
              <img src={signUpImage} className='max-h-full' alt="" />
            </div>



          </div>

        </div>
      )}
    </>
  )
}



export default App
