const ProductItem = ({ product, basis }) => {
  const { title, price, image, collectionName, comparePrice } = product;

  const isDiscounted = comparePrice ? comparePrice > price : false;
  const discountPercentage = isDiscounted
    ? ((1 - price / comparePrice) * 100).toFixed(0)
    : null;

  return (
    <div
      className={`text-textPrimary relative flex flex-col gap-2.5 text-xl ${basis}`}
    >
      {isDiscounted && (
        <div className="absolute top-2 right-2 rounded bg-red-500 px-2 py-1 text-xs font-bold text-white">
          -{discountPercentage}%
        </div>
      )}
      <img
        src={image}
        alt={title}
        className="aspect-video object-cover lg:aspect-square"
      />
      <div className="flex items-center justify-between">
        <h3>{title}</h3>
        <div className="flex items-center gap-2">
          {isDiscounted && (
            <span className="text-textSecondary text-sm line-through">
              £{comparePrice}
            </span>
          )}
          <p className={`font-medium ${isDiscounted ? 'text-red-500' : ''}`}>
            £{price}
          </p>
        </div>
      </div>
      <p className="text-textSecondary">{collectionName}</p>
    </div>
  );
};

export default ProductItem;
