import { BiChevronDown } from 'react-icons/bi';
import { GrLanguage } from 'react-icons/gr';

export const DropdownBtn = ({ isDropdownOpen, toggleDropdown, title }) => {
  return (
    <button
      id='dropdownMenuButton'
      aria-expanded={!isDropdownOpen ? 'false' : 'true'}
      className='
      flex items-center justify-center
      space-x-[0.5rem] min-w-[8.75rem]'
      onClick={toggleDropdown}
    >
      <GrLanguage />
      <span className='text-gray'>{title}</span>
      <BiChevronDown className='text-gray' />
    </button>
  );
};
