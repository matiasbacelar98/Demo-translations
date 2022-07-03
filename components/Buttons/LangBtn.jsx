import { useRouter } from 'next/router';

export const LangBtn = ({ lang, locale, flag }) => {
  const router = useRouter();
  const currentLang = router.locale;

  const firstLetterToUppercase = word =>
    word.charAt(0).toUpperCase() + word.slice(1);

  const changeLanguage = () => {
    router.push(`${router.asPath}`, null, {
      locale: locale,
    });
  };

  return (
    <button
      onClick={changeLanguage}
      className={`xl:flex xl:items-center space-x-[0.5rem] ${
        currentLang !== locale ? 'opacity-50' : 'opacity-100'
      }`}
    >
      {flag}

      <span className='hidden xl:text-gray xl:block'>
        {firstLetterToUppercase(lang)}
      </span>
    </button>
  );
};
