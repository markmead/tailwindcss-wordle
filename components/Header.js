export const Header = () => (
  <header>
    <div className="flex items-center justify-between max-w-xl py-4 mx-auto border-b border-gray-800">
      <a
        className="text-sm text-white hover:text-gray-300"
        href="https://twitter.com/itsmarkmead"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>

      <h1 className="font-bold text-white">Tailwind CSS Wordle</h1>

      <a
        className="text-sm text-white hover:text-gray-300"
        href="https://www.hyperui.dev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        HyperUI
      </a>
    </div>
  </header>
);
