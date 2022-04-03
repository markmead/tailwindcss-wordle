export const ResultLost = ({ handleRestartGame, word }) => (
  <div className="text-center">
    <h2 className="text-2xl font-bold">You Lost!</h2>

    <p className="text-sm">The correct class name was {word}</p>

    <button
      className="p-3 mt-4 text-sm bg-gray-100 rounded-lg"
      onClick={handleRestartGame}
    >
      Play Again
    </button>
  </div>
);
