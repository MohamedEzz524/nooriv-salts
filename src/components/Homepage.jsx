import homeMain from '../assets/images/main-home.png';

const section = {
  settings: {
    image: homeMain,
    title: 'Refined elegance, Lasting legacy.',
    description:
      'Elevate your senses with our exclusive collection of luxury whatever, crafted to leave a lasting impression',
  },
};

const { image, title, description } = section.settings;

const Homepage = () => {
  return (
    <section id="home-hero" className="h-full w-full overflow-hidden">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="home-main relative h-[100dvh] w-screen"
      >
        <div className="relative top-1/2 left-1/2 hidden w-1/2 -translate-y-full items-start justify-around lg:flex">
          <p className="w-[191px]">Discover the essence of sofistication.</p>
          <div className="max-w-[360px]">
            <p>{description}</p>
            <button className="mt-2.5 bg-white px-6 py-2 text-black">
              Shop Now
            </button>
          </div>
        </div>

        <p className="font-tan absolute bottom-4 hidden max-w-[696px] overflow-hidden text-[64px] leading-relaxed lg:block ltr:left-4 rtl:right-4">
          {title}
        </p>
      </div>

      {/* Mobile */}

      <button className="absolute bottom-8 left-1/2 mt-2.5 block -translate-x-1/2 rounded-full border-2 border-white px-6 py-2 text-white lg:hidden">
        SHOP NOW
      </button>

      <div className="text-textPrimary mt-12.5 block p-4 lg:hidden">
        <p className="font-tan mb-4 max-w-[348px] overflow-hidden text-[32px] lg:text-[64px]">
          {title}
        </p>
        <p className="text-textSecondary max-w-[352px]">{description}</p>
      </div>
    </section>
  );
};

export default Homepage;
