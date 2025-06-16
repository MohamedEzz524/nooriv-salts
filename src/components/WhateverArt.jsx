import blockImage from '../assets/images/vector.png';
import SectionLink from './SectionLink';
import WhateverArtItem from './WhateverArtItem';
import whateverImage from '../assets/images/whatever.png';

const section = {
  settings: {
    title: 'The art of whatever',
    description: 'Transform your decoration journey with unmatched elegance',
    url: 'https://example.com',
    image: whateverImage,
  },
  blocks: [
    {
      id: 'block-01',
      icon: blockImage,
      title: 'Sustainable & ethical',
      description:
        'Timeless blends, unforgettable impressions, crafted to embody sophistication and allure',
    },

    {
      id: 'block-02',
      icon: blockImage,
      title: 'Sustainable & ethical',
      description:
        'Timeless blends, unforgettable impressions, crafted to embody sophistication and allure',
    },

    {
      id: 'block-03',
      icon: blockImage,
      title: 'Sustainable & ethical',
      description:
        'Timeless blends, unforgettable impressions, crafted to embody sophistication and allure',
    },
    {
      id: 'block-04',
      icon: blockImage,
      title: 'Sustainable & ethical',
      description:
        'Timeless blends, unforgettable impressions, crafted to embody sophistication and allure',
    },
  ],
};

const {
  settings: { title, description, url, image },
  blocks,
} = section;

const WhateverArt = () => {
  return (
    <section className="my-12.5">
      <div
        className="whatever-art"
        style={{
          backgroundImage: `
      linear-gradient(45deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)),
      url(${image})
    `,
        }}
      >
        <h2 className="font-tan absolute top-8 max-w-[391px] text-[32px] text-white lg:text-[64px] ltr:left-4 rtl:right-4">
          {title}
        </h2>

        <div className="absolute bottom-8 ltr:max-lg:left-4 ltr:lg:right-4 rtl:max-lg:right-4 rtl:lg:left-4">
          <SectionLink
            desc="Timeless blends, unforgettable impressions, crafted to embody sophistication and allure"
            link={url}
            variant="secondary"
          />
        </div>
      </div>

      <h2 className="font-tan mb-12.5 max-w-[1062px] px-4 text-[28px] leading-24 lg:text-5xl">
        {description}
      </h2>

      <div className="flex flex-wrap justify-between gap-12.5 p-4 lg:flex-nowrap lg:gap-4">
        {blocks.map((block) => (
          <WhateverArtItem key={block.id} item={block} />
        ))}
      </div>
    </section>
  );
};

export default WhateverArt;
