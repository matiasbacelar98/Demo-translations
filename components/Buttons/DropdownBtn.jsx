import { BiChevronDown } from 'react-icons/bi';
import { GrLanguage } from 'react-icons/gr';

export const DropdownBtn = ({ isDropdownOpen, toggleDropdown }) => {
  return (
    <button
      id='dropdownMenuButton'
      aria-expanded={!isDropdownOpen ? 'false' : 'true'}
      className='flex items-center space-x-[0.5rem]'
      onClick={toggleDropdown}
    >
      <GrLanguage />
      <span className='text-gray'>Lenguages</span>
      <BiChevronDown className='text-gray' />
    </button>
  );
};