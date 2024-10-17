"use client";

import { useState } from 'react';
import Image from 'next/image';

interface LanguageDropdownProps {
  textColor?: string; // Prop để truyền vào màu chữ
}

const LanguageDropdown: React.FC<LanguageDropdownProps> = ({ textColor = 'text-white' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    code: 'EN',
    label: 'English',
    flag: '/img/flag/uk.png'
  });

  const languages = [
    { code: 'EN', label: 'English', flag: '/img/flag/uk.png' },
    { code: 'FR', label: 'France', flag: '/img/flag/france.png' },
    { code: 'RU', label: 'Russia', flag: '/img/flag/russia.jpg' },
    { code: 'ES', label: 'Spanish', flag: '/img/flag/spain.png' },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (language: { code: string; label: string; flag: string }) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        className={`flex items-center space-x-2 px-2 py-1 ${textColor} text-sm hover:text-hoverColor`} // Áp dụng màu chữ từ prop
        onClick={toggleDropdown}
      >
        <Image
          src={selectedLanguage.flag}
          alt="Flag"
          width={32}
          height={32}
          className="w-6 h-6 rounded-full overflow-hidden object-cover"
        />
        <span>{selectedLanguage.label}</span>
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
        <ul className="absolute right-0 mt-2 w-32 bg-white border text-sm rounded-md shadow-lg text-black">
          {languages.map((language) => (
            <li
              key={language.code}
              className="px-4 py-2 cursor-pointer hover:bg-backgroundDropdown hover:text-white"
              onClick={() => selectLanguage(language)}
            >
              {language.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageDropdown;