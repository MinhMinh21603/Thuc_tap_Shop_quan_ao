import React from 'react';

const FormRegister = () => {
    return (
        <div className="p-[30px] bg-white shadow-lg rounded-lg flex flex-1">
            <div className="flex flex-col gap-[20px] flex-1">
                <div className='mb-3'>
                    <h3 className="text-2xl font-semibold text-black mb-[10px]">Create an Account</h3>
                    <span className="text-base text-gray-500 font-semibold">
                        Register here if you are a new customer.
                    </span>
                </div>

                <div className="flex flex-col gap-[15px]">
                    <input
                        type="text"
                        placeholder="Username"
                        className="p-[12px] border border-gray-300 rounded focus:border-[#ee2761] focus:outline-none"
                    />
                    <input
                        type="text"
                        placeholder="Email Address"
                        className="p-[12px] border border-gray-300 rounded focus:border-[#ee2761] focus:outline-none"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="p-[12px] border border-gray-300 rounded focus:border-[#ee2761] focus:outline-none"
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className="p-[12px] border border-gray-300 rounded focus:border-[#ee2761] focus:outline-none"
                    />
                </div>

                <button className="bg-[#ee2761] hover:bg-[#061738] transition-colors duration-300 text-white font-semibold py-[12px] rounded">
                    Submit & Register
                </button>

                <div className="flex items-center gap-[10px]">    
                    <input type="checkbox" id="myCheckbox" className="form-checkbox w-[18px] h-[18px] accent-[#ee2761]" />
                    <span className="text-sm text-gray-600 font-semibold ">
                        I have read and agree to the terms & conditions
                    </span>
                </div>
            </div>
        </div>
    );
};

export default FormRegister;
