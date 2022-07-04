import useTranslation from 'next-translate/useTranslation';
import { FormBtn } from '../Buttons';

const Form = () => {
  const { t } = useTranslation();

  return (
    <div className='px-1 mx-auto py-2 max-w-[40.625rem]'>
      <article className='flex overflow-hidden rounded-[5px]'>
        <div className='hidden md:block md:basis-6/12'>
          <img
            src='https://images.unsplash.com/photo-1592914610354-fd354ea45e48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
            alt='perfume'
            className='w-full h-full'
          />
        </div>

        <div className='basis-[100%] space-y-2 bg-white p-3 md:basis-6/12'>
          <span className='uppercase text-gray-light tracking-wider'>
            {t('common:form.product')}
          </span>

          <h1 className='text-3xl text-gray font-bold max-w-[15.625rem]'>
            Gabrielle Essence Eau De Parfum
          </h1>

          <p className='text-gray-light text-base max-w-[15.625rem]'>
            {t('common:form.content')}
          </p>

          <div className='flex space-x-3'>
            <p className='text-3xl text-green font-bold'>
              {t('common:form.discountPrice')}
            </p>
            <p className='text-gray-light text-sm line-through'>
              {t('common:form.price')}
            </p>
          </div>

          <FormBtn content={t('common:form.btnText')} />
        </div>
      </article>
    </div>
  );
};

export default Form;
