import searchImg from '../assets/images/search.png';
import cartImg from '../assets/images/cart.png';
import { useEffect, useState } from 'react';

const links = [
  { path: '', title: 'Shop' },
  { path: '', title: 'Best Sellers' },
  { path: '', title: 'Gift Sets' },
  { path: '', title: 'Limited Edition' },
  { path: '', title: 'About' },
  { path: '', title: 'Contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${isScrolled ? 'text-textPrimary bg-white' : 'bg-transparent text-white'} fixed top-0 left-0 z-50 flex h-15 w-full items-center justify-between px-4 transition-colors duration-300`}
    >
      <div className="block lg:hidden">☰</div>

      <p className="font-tan absolute left-1/2 -translate-x-1/2 text-xl lg:relative lg:left-0 lg:translate-x-0">
        Nooriv Salts
      </p>

      <div className="flex h-full items-center justify-between gap-5 lg:min-w-1/2">
        <ul className="hidden h-full items-center gap-3 text-lg lg:flex">
          {links.map(({ title }) => (
            <li key={title} className="h-full">
              <a className="flex h-full items-center px-3" href="#">
                {title}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <div className="p-2">
            <img
              src={searchImg}
              alt="search"
              className="h-4 w-4 object-contain"
            />
          </div>
          <button className="p-2">
            <img src={cartImg} alt="cart" className="h-4 w-4 object-contain" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
