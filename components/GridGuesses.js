export const GridGuesses = ({ guesses }) => (
  <div className="space-y-1">
    {guesses.map((guess, index) => (
      <ul className="flex justify-center gap-1" key={index}>
        {guess.map(({ letter, correct, included }, index) => (
          <li
            key={index}
            className={`
              w-10 h-10 leading-10 shrink-0 text-center text-sm font-medium bg-gray-700 rounded-sm
              ${correct && "bg-green-700 text-white"}
              ${!correct && included && "bg-orange-700 text-white"}
              ${!correct && !included && "bg-red-700 text-white"}
            `}
          >
            {letter}
          </li>
        ))}
      </ul>
    ))}
  </div>
);
