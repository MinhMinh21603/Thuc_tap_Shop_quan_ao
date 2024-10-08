import React from 'react';

const FormLogin = () => {
    return (
        <div className="p-[30px] bg-white shadow-lg rounded-lg flex flex-1">
            <div className="flex flex-col flex-1 gap-[20px]">
                <div className='mb-3'>
                    <h3 className="text-2xl font-semibold text-black mb-[10px]">Login</h3>
                    <span className="text-base text-gray-500 font-semibold">
                        Login if you are a returning customer.
                    </span>
                </div>

                <div className="flex flex-col gap-[15px]">
                    <input
                        type="text"
                        placeholder="Email Address"
                        className="p-[12px] border border-gray-300 rounded  focus:border-[#ee2761] focus:outline-none"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="p-[12px] border border-gray-300 rounded focus:border-[#ee2761] focus:outline-none"
                    /> 
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-[10px]">
                        <input type="checkbox" className="form-checkbox w-[18px] h-[18px] accent-[#ee2761]" />
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
                    <button className="bg-[#4867aa] hover:bg-[#ee2761] transition-all duration-300 text-white py-[10px] w-[30%] rounded font-semibold">
                        Facebook
                    </button>
                    <button className="bg-red-500 hover:bg-[#ee2761] transition-all duration-300 text-white py-[10px] w-[30%] rounded font-semibold">
                        Google
                    </button>
                    <button className="bg-[#55adee] hover:bg-[#ee2761] transition-all duration-300 text-white py-[10px] w-[30%] rounded font-semibold">
                        Twitter
                    </button>
                </div>

                <div className="text-center text-sm text-gray-500 font-semibold">
                    Don’t have an account? <a href="#" className="text-[#ee2761]">Sign up now</a>
                </div>
            </div>
        </div>
    );
};

export default FormLogin;
