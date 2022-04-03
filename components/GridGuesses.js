export const GridGuesses = ({ guesses }) => (
  <div className="space-y-1">
    {guesses.map((guess, index) => (
      <ul className="flex justify-center gap-1" key={index}>
        {guess.map(({ letter, correct, included }, index) => (
          <li
            key={index}
            className={`
              w-8 h-8 leading-8 text-center text-sm font-bold bg-gray-100 rounded
              ${correct && "bg-green-500 text-white"}
              ${!correct && included && "bg-orange-500 text-white"}
              ${!correct && !included && "bg-red-500 text-white"}
            `}
          >
            {letter}
          </li>
        ))}
      </ul>
    ))}
  </div>
);
