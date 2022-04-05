export const GridGuesses = ({ guesses }) => (
  <div className="space-y-1">
    {guesses.map((guess, index) => (
      <ul className="flex gap-1 sm:justify-center" key={index}>
        {guess.map(({ letter, correct, included }, index) => (
          <li
            key={index}
            className={`
              w-10 h-10 leading-10 shrink-0 text-center text-sm font-medium bg-gray-700 rounded-sm
              ${correct && "bg-green-600 text-white"}
              ${!correct && included && "bg-yellow-600 text-white"}
              ${!correct && !included && "bg-red-600 text-white"}
            `}
          >
            {letter}
          </li>
        ))}
      </ul>
    ))}
  </div>
);
