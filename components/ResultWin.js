export const ResultWin = ({ handleRestartGame }) => (
  <div className="text-center">
    <h2 className="text-2xl font-bold">You Win!</h2>

    <button
      className="p-3 mt-4 text-sm bg-gray-100 rounded-lg"
      onClick={handleRestartGame}
    >
      Play Again
    </button>
  </div>
);
