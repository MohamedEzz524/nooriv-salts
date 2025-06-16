const SectionLink = ({
  desc,
  link,
  name = 'Explore Collection',
  variant = 'primary',
}) => {
  const isSecondary = variant === 'secondary';
  return (
    <div
      className={` ${isSecondary ? 'text-white' : 'text-textSecondary'} px-2 lg:max-w-xs`}
    >
      <p>{desc}</p>
      <a
        href={link}
        rel="noreferrer noopener"
        className={`${isSecondary ? 'text-white' : 'text-textPrimary'} mt-5 block text-base underline underline-offset-8 lg:text-[22px]`}
      >
        {name}
      </a>
    </div>
  );
};
export default SectionLink;
