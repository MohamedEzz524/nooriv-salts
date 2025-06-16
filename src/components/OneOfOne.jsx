import ProductItem from './ProductItem';
import SectionLink from './SectionLink';

const OneOfOne = ({ title, desc, link, products }) => {
  return (
    <section className="main-section">
      <h1 className="section-title">{title}</h1>

      <div className="flex w-full flex-wrap justify-between gap-4">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            basis="basis-full lg:basis-[calc(50%-1rem)] "
          />
        ))}
      </div>

      <div className="mt-12.5 flex w-full lg:justify-end">
        <div className="w-full lg:w-1/2">
          <SectionLink desc={desc} link={link} name="Shop One-Of-One Pieces" />
        </div>
      </div>
    </section>
  );
};

export default OneOfOne;
