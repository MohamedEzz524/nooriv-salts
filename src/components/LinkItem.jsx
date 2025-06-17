const LinkItem = ({ linkItem }) => {
  const { title, url, links = false } = linkItem;

  return (
    <div className="group relative h-full">
      <a className="flex h-full items-center px-4" href={url}>
        {title}
      </a>
      {links && (
        <>
          <div className="text-textPrimary absolute bottom-0 left-0 hidden translate-y-full bg-white py-2 group-hover:block">
            {links.map((link) => (
              <a
                href={link.url}
                className="hover:bg-textSecondary block px-2 text-nowrap"
              >
                {link.title}
              </a>
            ))}
          </div>
          <span className="absolute right-0 bottom-0 h-full w-4 content-center">
            ▼
          </span>
        </>
      )}
    </div>
  );
};

export default LinkItem;
