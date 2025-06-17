import searchImg from '../assets/images/search.png';
import cartImg from '../assets/images/cart.png';
import { useEffect, useState } from 'react';
import LinkItem from './LinkItem';

const linklists = {
  'main-menu': {
    id: 'menu_001',
    title: 'Main Menu',
    handle: 'main-menu',
    links: [
      {
        title: 'Home',
        url: '/',
      },
      {
        title: 'Shop',
        url: '/collections/all',
        links: [
          {
            title: 'Best Sellers',
            url: '/collections/best-sellers-stock',
          },
          {
            title: 'One of One',
            url: '/collections/one-of-one-pieces',
            links: [
              {
                title: 'Jackets',
                url: '/collections/one-of-one-pieces/jackets',
              },
              {
                title: 'Tees',
                url: '/collections/one-of-one-pieces/tees',
              },
            ],
          },
        ],
      },
      {
        title: 'About',
        url: '/pages/about',
      },
      {
        title: 'Contact',
        url: '/pages/contact',
      },
    ],
  },
};

const { links: linksItems } = linklists['main-menu'];

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
      className={`${isScrolled ? 'text-textPrimary bg-white' : 'bg-transparent text-white'} fixed top-0 left-0 z-50 flex h-15 w-full items-center justify-between px-4 shadow-md transition-colors duration-300`}
    >
      <div className="block lg:hidden">☰</div>

      <p className="font-tan absolute left-1/2 -translate-x-1/2 text-xl lg:relative lg:left-0 lg:translate-x-0">
        Nooriv Salts
      </p>

      <div className="flex h-full items-center justify-between gap-5 lg:min-w-1/2">
        <div className="hidden h-full items-center gap-3 text-lg lg:flex">
          {linksItems.map((linkItem) => (
            <LinkItem key={linkItem.title} linkItem={linkItem} />
          ))}
        </div>

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
