import { ES, US } from 'country-flag-icons/react/3x2';

export const LangBtn = ({ lang }) => {
  const isEnglish = lang === 'english';

  return (
    <button
      className='md:flex md:items-center space-x-[0.5rem]'
      type='button'
      id='dropdownMenuButton'
      aria-expanded='false'
    >
      {isEnglish ? <US className='h-3 w-3' /> : <ES className='h-3 w-3' />}
      <span className='hidden md:text-gray md:block'>
        {isEnglish ? 'English' : 'Spanish'}
      </span>
    </button>
  );
};
