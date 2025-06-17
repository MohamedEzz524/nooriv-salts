import footerImage from '../assets/images/footer.png';

const Footer = () => {
  return (
    <footer className="font-base mt-18 w-full">
      <div className="border-textPrimary flex min-h-80 flex-col justify-between border-t border-b lg:flex-row">
        <div className="bg-textPrimary flex basis-full items-center justify-center lg:basis-1/4">
          <img
            src={footerImage}
            alt="footer-image"
            className="h-fit w-fit object-cover"
          />
        </div>
        <div className="basis-1/2 self-center">
          <h3 className="font-tan max-w-36 text-[28px]">Connect With Us</h3>
          <ul></ul>
        </div>
      </div>
      <div className="flex justify-between px-4 py-6 text-xl">
        <h3 className="font-tan">Designed By Ecomup.io</h3>
        <div className="mr-10 flex gap-10">
          <button>Privacy & Policy</button>
          <button>Terms & Conditions</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
