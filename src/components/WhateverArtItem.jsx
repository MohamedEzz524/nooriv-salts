const WhateverArtItem = ({ item }) => {
  const { title, description, icon } = item;

  return (
    <div className="flex basis-full flex-col gap-4 lg:basis-1/4">
      <div className="border-textPrimary flex h-20 w-20 items-center justify-center rounded-full border">
        <img src={icon} alt={title} className="object-contain" />
      </div>

      <h3 className="font-tan text-textPrimary mb-3 text-xl lg:text-[28px]">
        {title}
      </h3>

      <p className="text-textSecondary text-base lg:text-xl">{description}</p>
    </div>
  );
};

export default WhateverArtItem;
