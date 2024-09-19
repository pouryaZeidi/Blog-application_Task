import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router'; 
import InputComponent from '@/components/InputComponent';
import { signInWithGooglePopup , createUserDocumentFromAuth } from '@/utils/firebase/firebase.utils';
// import { User } from 'firebase/auth';

const SignIn = () => {
  const router = useRouter(); 
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
   const userDocRef = await createUserDocumentFromAuth (user)
    // const userDocRef = await createUserDocumentFromAuth(user);
  };

  // Function to handle navigation to the previous page
  const handleBackClick = () => {
    router.back(); // Navigate back to the previous page
  };

  return (
    <div
      className="w-full h-screen flex flex-col justify-center items-center px-4"
      style={{
        backgroundImage: "url('/Road1.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full max-w-md p-6 backdrop-blur-sm border rounded-lg  bg-opacity-80 shadow-lg">
        {/* Back Button */}
        <button
          onClick={handleBackClick}
          className="mb-4 p-2 bg-gray-800 text-white rounded-2xl hover:bg-gray-700"
        >
          Back
        </button>

        <h1 className="font-bold text-3xl md:text-4xl text-gray-800 mb-6">SIGN IN</h1>

        <div className="space-y-4">
          <InputComponent
            label={'E-mail'}
            placeholder={'Type your email'}
            type={'email'}
            value={''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {console.log(e)}}
          />
          <InputComponent
            label={'Password'}
            placeholder={'Password'}
            type={'password'}
            value={''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {}}
          />
        </div>
        
        <div className='flex flex-col items-center mt-8 space-y-4'>
          <button className='w-full border bg-gray-400 p-4 text-2xl rounded-3xl hover:text-blue-500 hover:bg-black  font-bold'>
            LOGIN
          </button>
          <button onClick={logGoogleUser} className='w-full border bg-gray-400 p-4 text-2xl rounded-3xl hover:text-blue-500 hover:bg-black  font-bold'>
            LOGIN With Google
          </button>
          <Link href={'/signup'} className='bg-white rounded-3xl p-3 text-blue-500'>
            Create a new account (tap here)
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

