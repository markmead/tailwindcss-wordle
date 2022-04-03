export const Header = ({ count }) => (
  <header>
    <h1 className="text-3xl font-bold text-center">Tailwind CSS Wordle</h1>

    <p className="mt-4 text-sm text-center">
      Can you guess the correct class name from {count} Tailwind CSS class
      names?
    </p>
  </header>
);
