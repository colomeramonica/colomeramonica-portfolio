export default function MenuBar() {
  const handleFocus = (event: React.FocusEvent<HTMLAnchorElement>) => {
    const targetId = event.target.getAttribute('href');
    if (targetId) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="border border-black rounded-b-lg">
      <div className="align-top flex flex-row gap-32 justify-center px-7 py-2 text-gray-700 w-full">
        <a className="px-7 scroll-smooth" href="#about" onFocus={handleFocus}>about</a>
        <a className="px-7 scroll-smooth" href="#stack" onFocus={handleFocus}>stack</a>
        <a className="px-7 scroll-smooth" href="#experience" onFocus={handleFocus}>experience</a>
        <a className="px-7 scroll-smooth" onFocus={handleFocus}>projects</a>
        <a className="px-7 scroll-smooth" onFocus={handleFocus}>contact</a>
      </div>
    </div>
  );
}