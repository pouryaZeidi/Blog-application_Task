import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, loading, ...props }) => {
  return (
    <button
      className="w-full max-w-[300px] h-[30px] flex justify-center items-center overflow-hidden border bg-gray-400 p-4 text-2xl rounded-3xl hover:text-blue-500 hover:bg-black font-bold"
      {...props}
    >
      {loading ? (
        <svg className="animate-spin text-black h-[40px] w-[40px]" version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve">
          <path fill="#fff" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
            <animateTransform 
               attributeName="transform" 
               attributeType="XML" 
               type="rotate"
               dur="1s" 
               from="0 50 50"
               to="360 50 50" 
               repeatCount="indefinite" />
        </path>
      </svg>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
