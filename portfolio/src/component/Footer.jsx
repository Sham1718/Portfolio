const Footer = () => {
  const links = [
    {
      name: "GitHub",
      url: "https://github.com/Sham1718",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/shyambharaskar",
    }
  ];

  return (
    <footer className="py-8 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500 dark:text-gray-500">
          © {new Date().getFullYear()} Shyam Bharaskar. All rights reserved.
        </p>

        <div className="flex gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-indigo-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;