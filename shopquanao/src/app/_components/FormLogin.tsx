import React from 'react';
import InputField from './InputField';

const FormLogin = () => {
  const inputFields = [
    { type: 'email', name: 'email', placeholder: 'Email Address' },
    { type: 'password', name: 'password', placeholder: 'Password' },
  ];

  const socialButtons = [
    { platform: 'Facebook', color: 'bg-[#4867aa]', hoverColor: '#ee2761' },
    { platform: 'Google', color: 'bg-red-500', hoverColor: '#ee2761' },
    { platform: 'Twitter', color: 'bg-[#55adee]', hoverColor: '#ee2761' },
  ];

  return (
    <div className="p-[30px] bg-white shadow-lg rounded-lg flex flex-1">
      <div className="flex flex-col flex-1 gap-[20px]">
        <div className="mb-3">
          <h3 className="text-2xl font-semibold text-black mb-[10px]">Login</h3>
          <span className="text-base text-gray-500 font-semibold">
            Login if you are a returning customer.
          </span>
        </div>

        <div className="flex flex-col gap-[15px]">
          {inputFields.map((input, index) => (
            <InputField
              key={index}
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
            />
          ))}
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[10px]">
            <InputField type="checkbox" name="rememberMe" />
            <span className="text-sm text-gray-600 font-semibold">Remember me</span>
          </div>
          <a href="#" className="text-[#ee2761] text-sm font-semibold">
            Forgot Your Password?
          </a>
        </div>

        <button className="bg-[#ee2761] hover:bg-[#061738] transition-colors duration-300 text-white font-semibold py-[12px] rounded">
          Login
        </button>

        <div className="flex items-center justify-between">
          <hr className="w-full border-gray-300" />
          <span className="mx-[10px] text-sm text-gray-500">OR</span>
          <hr className="w-full border-gray-300" />
        </div>

        <div className="flex justify-between px-3">
          {socialButtons.map((button, index) => (
            <button
              key={index}
              className={`${button.color} hover:bg-[${button.hoverColor}] transition-all duration-300 text-white py-[10px] w-[30%] rounded font-semibold`}
            >
              {button.platform}
            </button>
          ))}
        </div>

        <div className="text-center text-sm text-gray-500 font-semibold">
          Don’t have an account?{' '}
          <a href="#" className="text-[#ee2761]">
            Sign up now
          </a>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
