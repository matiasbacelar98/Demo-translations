import { useState, useRef } from 'react';

import useTranslation from 'next-translate/useTranslation';
import { useClickOutside } from '../../hooks';

import { ES, US, BR } from 'country-flag-icons/react/3x2';

import { DropdownBtn, LangBtn } from '../Buttons';

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
      locale: 'pt-BR',
    },
  ];

  return (
    <div className='relative' ref={optionsLanguagesRef}>
      <DropdownBtn
        isDropdownOpen={isDropdownOpen}
        toggleDropdown={toggleDropdown}
        title={t('common:lenguages')}
      />

      {isDropdownOpen && (
        <ul
          className='
          flex justify-center items-center
          xl:flex-col xl:items-start space-x-[0.5rem]
          mt-[0.5rem] xl:space-y-[0.25rem] xl:space-x-[0]
          absolute bottom-0 left-0 w-full
          animate-[langList_200ms_ease-in-out]'
          aria-labelledby='dropdownMenuButton'
        >
          {langOptions.map(lang => (
            <li key={lang.id}>
              <LangBtn lang={lang.lang} locale={lang.locale} flag={lang.flag} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
