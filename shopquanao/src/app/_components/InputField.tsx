import React from "react";

interface Inputs {
  name: string;
  type: string;
  placeholder?: string;
  id?: string;
}

const InputField: React.FC<Inputs> = ({ name, type, placeholder, id }) => {
  const isRadio = type === 'radio';
  const isCheckbox = type === 'checkbox';

  return (
    <>
      <input
        type={type}
        name={name}
        id={id || ''}
        placeholder={!isCheckbox ? placeholder : undefined}
        className={
          isRadio || !isCheckbox
            ? "p-[12px] border border-gray-300 rounded focus:border-[#ee2761] focus:outline-none"
            : "form-checkbox w-[18px] h-[18px] accent-[#ee2761]"
        }
      />
    </>
  );
};

export default InputField;
