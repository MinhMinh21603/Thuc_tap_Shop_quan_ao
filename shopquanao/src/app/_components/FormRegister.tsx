import React from 'react';
import InputField from './InputField';

const inputsSection = [
  {
    type: 'text',
    name: 'name',
    placeholder: 'Username',
  },
  {
    type: 'text',
    name: 'email',
    placeholder: 'Email Address',
  },
  {
    type: 'password',
    name: 'password',
    placeholder: 'Password',
  },
  {
    type: 'password',
    name: 'confirmPassword',
    placeholder: 'Confirm Password',
  },
];

const FormRegister = () => {
  return (
    <div className="p-[30px] bg-white shadow-lg rounded-lg flex flex-1">
      <div className="flex flex-col gap-[20px] flex-1">
        <div className="mb-3">
          <h3 className="text-2xl font-semibold text-black mb-[10px]">
            Create an Account
          </h3>
          <span className="text-base text-gray-500 font-semibold">
            Register here if you are a new customer.
          </span>
        </div>

        <div className="flex flex-col gap-[15px]">
          {inputsSection.map((input, index) => (
            <InputField
              key={index}
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
            />
          ))}
        </div>

        <button className="bg-[#ee2761] hover:bg-[#061738] transition-colors duration-300 text-white font-semibold py-[12px] rounded">
          Submit & Register
        </button>

        <div className="flex items-center gap-[10px]">
        <InputField type='checkbox' id='termsCheckbox' name='termsCheckBox'></InputField>
          
          <span className="text-sm text-gray-600 font-semibold">
            I have read and agree to the terms & conditions
          </span>
        </div>
      </div>
    </div>
  );
};

export default FormRegister;
