import BestSellers from './BestSellers';
import OneOfOne from './OneOfOne';
import coreHoodie from '../assets/images/best-sellers-1.png';
import sweatpants from '../assets/images/best-sellers-2.png';
import cap from '../assets/images/best-sellers-3.png';
import stapleTee from '../assets/images/best-sellers-4.png';
import oneOfOne1 from '../assets/images/one-of-one-1.png';
import oneOfOne2 from '../assets/images/one-of-one-2.png';

const collections = {
  'best-sellers-stock': {
    id: 'col_001',
    handle: 'best-sellers-stock',
    title: 'Our Best Sellers',
    description:
      'Timeless blends, unforgettable impressions, crafted to embody sophistication and allure',
    url: 'https://example.com',
    products: [
      {
        id: 'prod_001',
        title: 'Core Hoodie',
        handle: 'core-hoodie',
        price: 85,
        comparePrice: 100,
        image: coreHoodie,
        available: true,
        collectionName: 'hoodie',
      },
      {
        id: 'prod_002',
        title: 'Essential Sweatpants',
        handle: 'essential-sweatpants',
        price: 70,
        image: sweatpants,
        available: true,
        collectionName: 'sweatpants',
      },
      {
        id: 'prod_003',
        title: 'Minimal Cap',
        handle: 'minimal-cap',
        price: 30,
        image: cap,
        available: true,
        collectionName: 'cap',
        comparePrice: 70,
      },
      {
        id: 'prod_004',
        title: 'Staple Tee',
        handle: 'staple-tee',
        price: 40,
        image: stapleTee,
        available: true,
        collectionName: 'staple',
      },
    ],
  },
  'one-of-one-pieces': {
    id: 'col_002',
    handle: 'one-of-one-pieces',
    title: 'One-Of-One Pieces',
    url: 'https://example.com',
    description:
      'Timeless blends, unforgettable impressions, with sophistication.',
    products: [
      {
        id: 'prod_005',
        title: 'Hand-Painted Denim Jacket',
        handle: 'hand-painted-denim-jacket',
        price: 220,
        image: oneOfOne1,
        available: true,
        collectionName: 'jacket',
      },
      {
        id: 'prod_006',
        title: 'Custom Embroidered Hoodie',
        handle: 'custom-embroidered-hoodie',
        price: 150,
        image: oneOfOne2,
        collectionName: 'hoodie',
        available: true,
        comparePrice: 225,
      },
    ],
  },
};

const bestSellers = collections['best-sellers-stock'];

const {
  products: bestSellerProducts,
  title: bestSellerTitle,
  description: bestSellerDescription,
  url: bestSellerLink,
} = bestSellers;

const oneOfOne = collections['one-of-one-pieces'];

const {
  products: oneOfOneProducts,
  title: oneOfOneTitle,
  description: oneOfOneDescription,
  url: oneOfOneLink,
} = oneOfOne;

const MainProducts = () => {
  return (
    <>
      <BestSellers
        title={bestSellerTitle}
        desc={bestSellerDescription}
        link={bestSellerLink}
        products={bestSellerProducts}
      />

      <OneOfOne
        title={oneOfOneTitle}
        desc={oneOfOneDescription}
        link={oneOfOneLink}
        products={oneOfOneProducts}
      />
    </>
  );
};

export default MainProducts;
