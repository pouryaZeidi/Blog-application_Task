import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/router'; // Import useRouter
import InputComponent from '@/components/InputComponent';
import { signUpFirebase } from '@/utils/firebase/firebase.utils';
import Button from '@/components/Button';
import notif from '@/utils/notif';

const Signup = () => {
  const router = useRouter()
  const [state,setState] = useState({email:'',pass:'',displayName:''})
  const [loading,setLoading] = useState(false)

  const handleBackClick = () => {
    router.back()
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value} = event.target
    setState({...state,[name]:value})
  }

  const signUpHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    try {
      await signUpFirebase(state.email,state.pass,state.displayName)
      router.push('/signin')
    } catch (error:any) {
      notif(error.message,'danger')
      console.log(error)
    }finally{
      setLoading(false)
    }
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center px-4" style={{backgroundImage: "url('/Road1.jpg')",backgroundSize: 'cover',backgroundPosition: 'center',}}>
      <div className="w-full max-w-md p-6 backdrop-blur-sm border rounded-lg  bg-opacity-80 h-auto max-h-[90vh] overflow-y-auto">
        <button onClick={handleBackClick} className="mb-4 p-2 bg-blue-500 text-white rounded-3xl hover:bg-gray-700">
          Back
        </button>
        <h1 className="font-bold text-3xl md:text-4xl text-gray-800 mb-6">SIGN UP</h1>
        <form onSubmit={signUpHandler} className="w-full space-y-4">
          <InputComponent
            label={'Full name'}
            placeholder={'Type your name'}
            type={'text'}
            name='displayName'
            value={state.displayName}
            onChange={onChangeHandler}
          />
          <InputComponent
            label={'E-mail'}
            placeholder={'Type your email'}
            type={'email'}
            name='email'
            value={state.email}
            onChange={onChangeHandler}
          />
          <InputComponent
            label={'Password'}
            name='pass'
            placeholder={'Password'}
            type={'password'}
            value={state.pass}
            onChange={onChangeHandler}
          />
          <Button type='submit' loading={loading}>
            SIGN UP
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
