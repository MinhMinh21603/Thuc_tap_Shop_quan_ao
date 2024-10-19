import React from 'react';
import InputField from './InputField';

interface InputFieldItem {
    type: string;
    name: string;
    placeholder: string;
}

interface FormRegisterProps {
    inputsSection: InputFieldItem[];
    className: string;
    title: string;
    grow: string;
    titleMain: string;
    titleButton: string;
}

const FormSection: React.FC<FormRegisterProps> = ({ inputsSection, className, title, grow, titleMain, titleButton }) => {
  return (
    <div className={` ${className}`}>
      <div className={`flex flex-col gap-5 ${grow}`}>
        <div className="mb-3">
          <h3 className="text-2xl font-semibold text-black mb-2">{titleMain}</h3>
          <span className="text-base text-gray-500 font-semibold">
            {title}
          </span>
        </div>

        <div className="flex flex-col gap-4">
          {inputsSection.map((input, index) => (
            <InputField
              key={index}
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
            />
          ))}
        </div>

        <button className="bg-pink-500 hover:bg-[#061738] transition-colors duration-300 text-white font-semibold py-3 rounded">
          {titleButton}
        </button>

        <div className="flex items-center gap-2">
          <InputField type="checkbox" id="termsCheckbox" name="termsCheckBox" />
          <label htmlFor="termsCheckbox" className="text-sm text-gray-600 font-semibold">
            I have read and agree to the terms & conditions
          </label>
        </div>
      </div>
    </div>
  );
};

export default FormSection;
