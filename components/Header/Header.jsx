import Dropdown from '../Dropdown';

const Header = () => {
  return (
    <header
      className='
      max-w-[1400px] mx-auto p-1
      min-h-[10vh] flex items-center justify-end'
    >
      <Dropdown />
    </header>
  );
};

export default Header;
