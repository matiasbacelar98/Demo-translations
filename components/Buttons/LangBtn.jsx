import { useRouter } from 'next/router';
import { useCurrentLocale } from '../../hooks';

export const LangBtn = ({ lang, flag, locale }) => {
  const router = useRouter();
  const currentLocale = useCurrentLocale();

  const changeLanguage = () => {
    router.push(`${router.asPath}`, null, {
      locale: locale,
    });
  };

  const firstLetterToUppercase = word =>
    word.charAt(0).toUpperCase() + word.slice(1);

  return (
    <button
      onClick={changeLanguage}
      className={`lg:flex lg:items-center space-x-[0.5rem] ${
        currentLocale !== locale ? 'opacity-50' : 'opacity-100'
      }`}
    >
      {flag}
      <span className='hidden xl:text-gray lg:block'>
        {firstLetterToUppercase(lang)}
      </span>
    </button>
  );
};
