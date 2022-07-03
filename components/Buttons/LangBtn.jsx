import { ES, US, PT } from 'country-flag-icons/react/3x2';

export const LangBtn = ({ lang }) => {
  const checkLang = lang => {
    if (lang === 'english') return <US className='h-3 w-3' />;
    if (lang === 'portuguese') return <PT className='h-3 w-3' />;
    return <ES className='h-3 w-3' />;
  };

  const firstLetterToUppercase = word =>
    word.charAt(0).toUpperCase() + word.slice(1);

  return (
    <button className='md:flex md:items-center space-x-[0.5rem]' type='button'>
      {checkLang(lang)}

      <span className='hidden md:text-gray md:block'>
        {firstLetterToUppercase(lang)}
      </span>
    </button>
  );
};
