import { useState, useEffect } from "react";

import { GuessCard } from "./GuessCard";

export const GridGuesses = ({ guesses }) => (
  <div className="space-y-1">
    {guesses.map((guess, index) => (
      <ul className="flex gap-1 sm:justify-center" key={index}>
        {guess.map(({ letter, correct, included }, index) => (
          <GuessCard
            key={index}
            letter={letter}
            correct={correct}
            included={included}
          />
        ))}
      </ul>
    ))}
  </div>
);
