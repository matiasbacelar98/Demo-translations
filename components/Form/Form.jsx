import { FormBtn } from '../Buttons';

const Form = () => {
  return (
    <div className='px-1 mx-auto max-w-[37.5rem]'>
      <article className='flex overflow-hidden rounded-[5px]'>
        <div className='hidden md:block md:basis-6/12'>
          <img
            src='https://images.unsplash.com/photo-1592914610354-fd354ea45e48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
            alt='perfume'
            className='w-full h-full'
          />
        </div>

        <div className='basis-[100%] space-y-1 bg-white p-3 md:basis-6/12'>
          <span className='uppercase text-gray-light tracking-wider'>
            Perfume
          </span>

          <h1 className='text-3xl text-gray font-bold max-w-[15.625rem]'>
            Gabrielle Essence Eau De Parfum
          </h1>

          <p className='text-gray-light text-base max-w-[15.625rem]'>
            A floral, solar and voluptuous interpretation composed by Olivier
            Paige, Perfume-Creator for the House of <span>chanel</span>
          </p>

          <div className='flex space-x-3'>
            <p className='text-3xl text-green font-bold'>149.99$</p>
            <p className='text-gray-light text-sm line-through'>169.99$</p>
          </div>

          <FormBtn />
        </div>
      </article>
    </div>
  );
};

export default Form;
