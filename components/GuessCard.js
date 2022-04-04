import { useState, useEffect } from "react";

export const CardGuess = ({ letter, correct, included }) => {
  let [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, [letter]);

  return (
    <li
      className={`
        w-10 h-10 leading-10 shrink-0 text-center text-sm font-medium bg-gray-700 rounded-sm
        ${correct && "bg-green-600 text-white"}
        ${!correct && included && "bg-yellow-600 text-white"}
        ${!correct && !included && "bg-red-600 text-white"}
      `}
    >
      {letter}
    </li>
  );
};
