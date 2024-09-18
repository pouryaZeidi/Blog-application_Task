import { useRouter } from 'next/router';
import React from 'react'

const id = () => {
  const router = useRouter(); 

  // Function to handle navigation to the previous page
  const handleBackClick = () => {
    router.back(); // Navigate back to the previous page
  };
  return (
    <div>
        <button
          onClick={handleBackClick}
          className="mb-4 p-2 bg-gray-800 text-white rounded-2xl hover:bg-gray-700"  >
          Back
        </button>
        <h1>id</h1>
    </div>
  )
}

export default id