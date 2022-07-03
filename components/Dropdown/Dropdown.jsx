import { useState } from 'react';
import { DropdownBtn, LangBtn } from '../Buttons';

const Dropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const langOptions = [
    {
      id: 1,
      lang: 'english',
    },
    {
      id: 2,
      lang: 'spanish',
    },
    {
      id: 3,
      lang: 'portuguese',
    },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  return (
    <div className='relative'>
      <DropdownBtn
        isDropdownOpen={isDropdownOpen}
        toggleDropdown={toggleDropdown}
      />

      {isDropdownOpen && (
        <ul
          className='
          flex justify-center items-center
          md:flex-col md:items-start space-x-[0.5rem]
          mt-[0.5rem] md:space-y-[0.25rem] md:space-x-[0]
          absolute bottom-0 left-0 w-full
          animate-[langList_220ms_ease-in-out]'
          aria-labelledby='dropdownMenuButton'
        >
          {langOptions.map(lang => (
            <li key={lang.id}>
              <LangBtn lang={lang.lang} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
