const Footer = () => {
  return (
    <footer className="py-8 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500 dark:text-gray-500">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
        <div className="flex gap-6">
          {["GitHub", "LinkedIn", "Twitter"].map(s => (
            <a key={s} href="#" className="text-sm text-gray-500 hover:text-indigo-500 transition-colors">{s}</a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;