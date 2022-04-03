export const Header = ({ count }) => (
  <header className="w-full max-w-2xl pb-8 mx-auto border-b border-gray-800">
    <h1 className="text-3xl font-bold text-center text-white">
      Tailwind CSS Wordle
    </h1>

    <p className="mt-4 text-sm text-center">
      Can you guess the correct Tailwind CSS class name from {count} options?
    </p>
  </header>
);
