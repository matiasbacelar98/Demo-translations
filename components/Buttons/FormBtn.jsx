import { AiOutlineShoppingCart } from 'react-icons/ai';

export const FormBtn = ({ content }) => {
  return (
    <button
      className='
        text-base text-white font-semibold
        flex items-center justify-center 
        w-full px-1 py-[0.5rem]
        bg-green rounded-[5px]
        space-x-[0.5rem]
      '
      onClick={() => console.log('Gabrielle Essence Eau de Parfum')}
    >
      <AiOutlineShoppingCart />
      <span>{content}</span>
    </button>
  );
};
