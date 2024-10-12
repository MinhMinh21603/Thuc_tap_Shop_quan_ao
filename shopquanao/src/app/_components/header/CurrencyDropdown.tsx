"use client";

import { useState } from 'react';
import Image from 'next/image';

interface CurrencyDropdownProps {
  textColor?: string; 
}

const CurrencyDropdown: React.FC<CurrencyDropdownProps> = ({ textColor = 'text-white' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState({
    code: 'USD',
    label: 'US Dollar',
    flag: '/img/flag/usa.jpg'
  });

  const currencies = [
    { code: 'USD', label: 'US Dollar', flag: '/img/flag/usa.jpg' },
    { code: 'EUR', label: 'Euro', flag: '/img/flag/euro.jpg' },
    { code: 'JPY', label: 'Japanese Yen', flag: '/img/flag/japan.webp' },
    { code: 'GBP', label: 'British Pound', flag: '/img/flag/uk.png' },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectCurrency = (currency: { code: string; label: string; flag: string }) => {
    setSelectedCurrency(currency);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        className={`flex items-center space-x-2 px-2 py-1 ${textColor} text-sm hover:text-hoverColor`} // Áp dụng màu chữ từ prop
        onClick={toggleDropdown}
      >
        <Image
          src={selectedCurrency.flag}
          alt="Currency"
          width={32}
          height={32}
          className="w-6 h-6 rounded-full overflow-hidden object-cover"
        />
        <span>{selectedCurrency.label}</span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <ul className="absolute right-0 mt-2 w-40 bg-white border text-sm rounded-md shadow-lg text-black z-50">
          {currencies.map((currency) => (
            <li
              key={currency.code}
              className="px-4 py-2 cursor-pointer hover:bg-backgroundDropdown hover:text-white"
              onClick={() => selectCurrency(currency)}
            >
              {currency.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CurrencyDropdown;