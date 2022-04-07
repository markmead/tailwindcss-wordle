import { Settings } from "./Settings";

export const Header = () => (
  <header>
    <div className="flex items-center justify-between max-w-xl py-4 mx-auto border-b border-gray-800">
      <div className="flex items-center flex-1 gap-4">
        <a
          className="text-sm text-white hover:text-gray-300"
          href="https://twitter.com/itsmarkmead"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>

        <a
          className="text-sm text-white hover:text-gray-300"
          href="https://www.hyperui.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          HyperUI
        </a>
      </div>

      <h1 className="flex-1 font-bold text-center text-white">
        Tailwind CSS Wordle
      </h1>

      <div className="flex justify-end flex-1">
        <Settings />
      </div>
    </div>
  </header>
);
