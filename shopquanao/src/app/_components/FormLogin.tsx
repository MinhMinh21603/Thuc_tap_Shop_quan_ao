'use client'
import React from 'react';
import { useSetRecoilState } from 'recoil';
import InputField from './InputField';
import { ApiError, authState } from '../_recoil/atoms/userAtoms';
import axios from 'axios';
import Link from 'next/link';

const FormLogin = () => {
  
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const setAuth = useSetRecoilState(authState);

  const inputFields = [
    { type: 'email', name: 'email', placeholder: 'Email Address', value: email, onChange: (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value) },
    { type: 'password', name: 'password', placeholder: 'Password', value: password, onChange: (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value) },
  ];

  const socialButtons = [
    { platform: 'Facebook', color: 'bg-[#4867aa]', hoverColor: '#ee2761' },
    { platform: 'Google', color: 'bg-red-500', hoverColor: '#ee2761' },
    { platform: 'Twitter', color: 'bg-[#55adee]', hoverColor: '#ee2761' },
  ];

  const validateForm = (): boolean => {
    if (!email) {
      setErrorMessage('Email không được để trống.');
      return false;
    }
    if (!password) {
      setErrorMessage('Mật khẩu không được để trống.');
      return false;
    }
    setErrorMessage(null); 
    return true;
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setAuth((prev) => ({ ...prev, loading: true, error: null }));

    try {
      const response = await axios.post('/api/auth/user/getUserByField', { email, password }, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });
      
      const user = response.data.user;
      localStorage.setItem('user', user);
      setAuth({ isLoggedIn: true, user, loading: false, error: null });
      setEmail('');
      setPassword('');
      
    } catch (error: unknown) {
      let errorMessage = 'Đăng nhập thất bại.';

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
    <div className="p-[30px] bg-white shadow-lg rounded-lg flex flex-1">
      <div className="flex flex-col flex-1 gap-[20px]">
        <div className="mb-3">
          <h3 className="text-2xl font-semibold text-black mb-[10px]">Login</h3>
          <span className="text-base text-gray-500 font-semibold">
            Login if you are a returning customer.
          </span>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-[15px]">
          {inputFields.map((input, index) => (
            <InputField
              key={index}
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              value={input.value}
              onChange={input.onChange}
            />
          ))}
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-[10px]">
              <InputField type="checkbox" name="rememberMe" />
              <span className="text-sm text-gray-600 font-semibold">Remember me</span>
            </div>
            <Link href="/auth/forgot-password" className="text-[#ee2761] text-sm font-semibold">
              Forgot Your Password?
            </Link>
          </div>

          <button 
            className={`bg-[#ee2761] ${(!email || !password) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#061738]'} transition-colors duration-300 text-white font-semibold py-[12px] rounded`}
            disabled={!email || !password} 
          >
            Login
          </button>
        </form>

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