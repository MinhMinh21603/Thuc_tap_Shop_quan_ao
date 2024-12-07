'use client'
import React, { useState } from 'react';
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

const FormSection: React.FC<FormRegisterProps> = ({ inputsSection, className, title, grow, titleMain, titleButton }) => {
  const [username, setUsername] = useState(''); 
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(''); // Thêm state cho số điện thoại
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const setAuth = useSetRecoilState(authState);

  const validateEmail = (email: string): boolean => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const phonePattern = /^\d{10,15}$/; // Kiểm tra số điện thoại từ 10 đến 15 chữ số
    return phonePattern.test(phone);
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Reset thông báo lỗi
    setErrorMessage(null);

    // Kiểm tra các điều kiện validation
    if (!username) {
      setErrorMessage('Username không được để trống.');
      return;
    }
    if (!email) {
      setErrorMessage('Email không được để trống.');
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage('Email không hợp lệ.');
      return;
    }
    if (!phone) {
      setErrorMessage('Số điện thoại không được để trống.');
      return;
    }
    if (!validatePhone(phone)) {
      setErrorMessage('Số điện thoại không hợp lệ. Phải từ 10 đến 15 chữ số.');
      return;
    }
    if (!password) {
      setErrorMessage('Mật khẩu không được để trống.');
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage('Mật khẩu không khớp.');
      return;
    }

    setAuth((prev) => ({ ...prev, loading: true, error: null }));

    try {
      const response = await axios.post('https://api-core.dsp.one/api/auth/user/register', {
        name: username,  
        email,
        phone, 
        password,
        password_confirmation: confirmPassword,
        customer_id: 1
      });
      
      const user = response.data.user;
      setAuth({ isLoggedIn: true, user, loading: false, error: null });
      // Reset các trường
      setUsername('');
      setEmail('');
      setPhone(''); // Reset số điện thoại
      setPassword('');
      setConfirmPassword('');
      
    } catch (error: unknown) {
      let errorMessage = 'Đăng ký thất bại.';

      if (axios.isAxiosError(error)) {
        const apiError = error.response?.data as ApiError;
        errorMessage = apiError?.message || errorMessage;
      }

      setAuth((prev) => ({
        ...prev,
        loading: false,
        error: errorMessage,
      }));
      setErrorMessage(errorMessage);
    }
  };

  return (
    <div className={` ${className}`}>
      <div className={`flex flex-col gap-5 ${grow}`}>
        <div className="mb-3">
          <h3 className="text-2xl font-semibold text-black mb-2">{titleMain}</h3>
          <span className="text-base text-gray-500 font-semibold">
            {title}
          </span>
        </div>

        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          {inputsSection.map((input, index) => (
            <InputField
              key={index}
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              value={
                input.name === 'username' ? username : 
                input.name === 'email' ? email : 
                input.name === 'phone' ? phone : // Thêm xử lý cho số điện thoại
                input.name === 'password' ? password : 
                confirmPassword
              }
              onChange={(e) => {
                if (input.name === 'username') setUsername(e.target.value);
                if (input.name === 'email') setEmail(e.target.value);
                if (input.name === 'phone') {
                  const value = e.target.value.replace(/[^0-9]/g, ''); // Chỉ cho phép ký tự số
                  setPhone(value); // Cập nhật số điện thoại
                }
                if (input.name === 'password') setPassword(e.target.value);
                if (input.name === 'confirmPassword') setConfirmPassword(e.target.value);
              }}
            />
          ))}
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          
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