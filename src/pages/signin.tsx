import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/router'; 
import InputComponent from '@/components/InputComponent';
import { signInWithGooglePopup ,signInUserWithEmailAndPassword } from '@/utils/firebase/firebase.utils';
import { useAppDispatch } from '@/app/hook';
import { setToken } from '@/app/featurs/userSlice';

const SignIn = () => {
  const dispatch = useAppDispatch()
  const router = useRouter(); 
  const [loading,setLoading] = useState(false)
  const [state,setState] = useState({email:'',pass:''})

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value} = event.target
    setState({...state,[name]:value})
  }

  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    return user
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
    setLoading(true)
    try {
      const res:any = await signInUserWithEmailAndPassword(state.email,state.pass)
      console.log(res)
      dispatch(setToken(res?.user?.accessToken))
      localStorage.setItem('test_access_token',res?.user?.accessToken)
      router.push('/')
    } catch (error) {
      console.log(error)
    }finally{
      setLoading(false)
    }
  }

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div
      className="w-full h-screen flex flex-col justify-center items-center px-4"
      style={{
        backgroundImage: "url('/1.jpg')",
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
      <form onSubmit={submitHandler}>
        <div className="space-y-4">
          <InputComponent
            label={'E-mail'}
            placeholder={'Type your email'}
            type={'email'}
            value={state.email}
            name='email'
            onChange={onChangeHandler}
            />
          <InputComponent
            label={'Password'}
            placeholder={'Password'}
            type={'password'}
            name='pass'
            value={state.pass}
            onChange={onChangeHandler}
            />
        </div>
        
        <div className='flex flex-col items-center mt-8 space-y-4'>
          <button type='submit' className='w-full border bg-gray-400 p-4 text-2xl rounded-3xl hover:text-blue-500 hover:bg-black  font-bold'>
            LOGIN
          </button>
          <button onClick={logGoogleUser} className='w-full border bg-gray-400 p-4 text-2xl rounded-3xl hover:text-blue-500 hover:bg-black  font-bold'>
            LOGIN With Google
          </button>
          <Link href={'/signup'} className='bg-white rounded-3xl p-3 text-blue-500'>
            Create a new account (tap here)
          </Link>
        </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

