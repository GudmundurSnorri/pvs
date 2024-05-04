const TopNavigation = () => {
  return (
    <div className="sm:hidden lg:flex  px-20 h-10 items-center w-full bg-white border-solid border-b border-red-main">
      <a
        href="https://maps.app.goo.gl/zL62AbRZhvemMLGy7"
        className="text-sm text-gray-400"
      >
        Gagnheiði 43, 800 Selfoss
      </a>
      <div className="px-2 text-red-main"> | </div>
      <a href="tel:003548983877" className="text-sm text-gray-400">
        +354 8983877
      </a>
    </div>
  );
};

export default TopNavigation;
