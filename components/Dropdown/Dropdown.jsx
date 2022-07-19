import { useState, useRef } from 'react';

import useTranslation from 'next-translate/useTranslation';
import { useClickOutside } from '../../hooks';

import { ES, US, BR } from 'country-flag-icons/react/3x2';

import { DropdownBtn, LangBtn } from '../Buttons';

const DropdownList = ({ isDropdownOpen }) => {
  const { t } = useTranslation();

  const langOptions = [
    {
      id: 1,
      lang: t('common:options.en'),
      flag: <US className='h-3 w-3' />,
      locale: 'en',
    },
    {
      id: 2,
      lang: t('common:options.es'),
      flag: <ES className='h-3 w-3' />,
      locale: 'es',
    },
    {
      id: 3,
      lang: t('common:options.pt'),
      flag: <BR className='h-3 w-3' />,
      locale: 'pt',
    },
  ];

  return (
    <>
      {isDropdownOpen && (
        <ul
          className='
        flex justify-center items-center
        lg:flex-col lg:items-start space-x-[0.5rem]
        mt-[0.5rem] lg:space-y-[0.25rem] lg:space-x-[0]
        absolute bottom-0 left-0 w-full
        animate-[langList_200ms_ease-in-out]'
          aria-labelledby='dropdownMenuButton'
        >
          {langOptions.map(lang => (
            <li key={lang.id}>
              <LangBtn lang={lang.lang} flag={lang.flag} locale={lang.locale} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

const Dropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const optionsLanguagesRef = useRef(null);
  const { t } = useTranslation();

  // Close lang options when click outside
  useClickOutside(optionsLanguagesRef, () => {
    setIsDropdownOpen(false);
  });

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  return (
    <div className='relative' ref={optionsLanguagesRef}>
      <DropdownBtn
        isDropdownOpen={isDropdownOpen}
        toggleDropdown={toggleDropdown}
        title={t('common:lenguages')}
      />

      <DropdownList isDropdownOpen={isDropdownOpen} />
    </div>
  );
};

export default Dropdown;
