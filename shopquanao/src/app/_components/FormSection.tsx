'use client';
import React, { useState, useCallback } from 'react';
import InputField from './InputField';
import axios from 'axios';
import { ApiError, authState } from '../_recoil/atoms/userAtoms';
import { useSetRecoilState } from 'recoil';

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

const FormSection: React.FC<FormRegisterProps> = ({
  inputsSection,
  className,
  title,
  grow,
  titleMain,
  titleButton,
}) => {
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null); // New state for success message
  const setAuth = useSetRecoilState(authState);

  const validateEmail = (email: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone: string): boolean => /^\d{10,15}$/.test(phone);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormValues((prev) => ({
        ...prev,
        [name]: name === 'phone' ? value.replace(/[^0-9]/g, '') : value,
      }));
    },
    [setFormValues]
  );

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null); // Reset success message

    const { username, email, phone, password, confirmPassword } = formValues;

    if (!username) return setErrorMessage('Username không được để trống.');
    if (!email) return setErrorMessage('Email không được để trống.');
    if (!validateEmail(email)) return setErrorMessage('Email không hợp lệ.');
    if (!phone) return setErrorMessage('Số điện thoại không được để trống.');
    if (!validatePhone(phone)) return setErrorMessage('Số điện thoại không hợp lệ.');
    if (!password) return setErrorMessage('Mật khẩu không được để trống.');
    if (password !== confirmPassword) return setErrorMessage('Mật khẩu không khớp.');

    setAuth((prev) => ({ ...prev, loading: true, error: null }));

    try {
      const response = await axios.post('/api/auth/user/register', {
        name: username,
        email,
        phone,
        password,
        password_confirmation: confirmPassword,
        customer_id: 1,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });

      const user = response.data.data;
      setAuth({ isLoggedIn: true, user, loading: false, error: null });
      setFormValues({
        username: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
      });
      
      // Set the success message
      setSuccessMessage(response.data.message || "Registration successful!");

    } catch (error: unknown) {
      let errorMessage = 'Đăng ký thất bại.';
      if (axios.isAxiosError(error)) {
        const apiError = error.response?.data as ApiError;
        errorMessage = apiError?.message || errorMessage;
      }
      setAuth((prev) => ({ ...prev, loading: false, error: errorMessage }));
      setErrorMessage(errorMessage);
    }
  };

  return (
    <div className={`${className}`}>
      <div className={`flex flex-col gap-5 ${grow}`}>
        <div className="mb-3">
          <h3 className="text-2xl font-semibold text-black mb-2">{titleMain}</h3>
          <span className="text-base text-gray-500 font-semibold">{title}</span>
        </div>
        {errorMessage && <p className="text-red-500 font-semibold">{errorMessage}</p>}
        {successMessage && <p className="text-green-500 font-semibold">{successMessage}</p>} 

        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          {inputsSection.map((input, index) => (
            <InputField
              key={index}
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              value={formValues[input.name as keyof typeof formValues]}
              onChange={handleChange}
            />
          ))}
          <button
            type="submit"
            className="bg-[#ee2761] hover:bg-[#061738] transition-colors duration-300 text-white font-semibold py-3 rounded"
          >
            {titleButton}
          </button>

          <div className="flex items-center gap-2">
            <InputField type="checkbox" id="termsCheckbox" name="termsCheckBox" />
            <label htmlFor="termsCheckbox" className="text-sm text-gray-600 font-semibold">
              I have read and agree to the terms & conditions
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormSection;