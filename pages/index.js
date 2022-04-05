import { useEffect, useState } from "react";

import { tailwindClasses } from "../lib/tailwind";

import { GridPlaceholder } from "../components/GridPlaceholder";
import { GridGuesses } from "../components/GridGuesses";
import { ResultWin } from "../components/ResultWin";
import { ResultLost } from "../components/ResultLost";
import { GameShared } from "../components/GameShared";

import { fromHex, toHex } from "../utils/ecoder";

export default function Home() {
  let [classNames, setClassNames] = useState([]);
  let [word, setWord] = useState("");
  let [guess, setGuess] = useState("");
  let [guesses, setGuesses] = useState([]);
  let [win, setWin] = useState(null);
  let [lost, setLost] = useState(null);
  let [error, setError] = useState("");
  let [shared, setShared] = useState(false);

  let classCount = tailwindClasses.length;

  useEffect(() => {
    setClassNames(tailwindClasses);

    const urlParams = new URLSearchParams(window.location.search);
    const sharedWord = urlParams.get("word");

    if (sharedWord) {
      const decodedWord = fromHex(sharedWord);

      setWord(decodedWord);

      return;
    }

    const randomClassName =
      tailwindClasses[Math.floor(Math.random() * tailwindClasses.length)];

    setWord(randomClassName);
  }, []);

  function checkGuess() {
    setError("");

    if (!classNames.includes(guess)) {
      setError("Class name not in the list");

      return;
    }

    if (guess.length !== word.length) {
      setError(`Class name must be ${word.length} characters long`);

      return;
    }

    const guessArray = guess.split("");
    const wordArray = word.split("");

    const guessResult = guessArray.map((letter, index) => {
      return {
        letter,
        correct: letter === wordArray[index],
        included: wordArray.includes(letter),
      };
    });

    const newGuesses = [...guesses, guessResult];

    setGuesses(newGuesses);

    setWin(guess === word);
    setLost(guesses.length === 4 && guess !== word);

    setGuess("");
  }

  function restartGame() {
    const randomClassName =
      tailwindClasses[Math.floor(Math.random() * tailwindClasses.length)];

    setWord(randomClassName);
    setGuesses([]);
    setWin(null);
    setLost(null);
  }

  function shareGame() {
    const encodedWord = toHex(word);
    const shareUrl = `${window.location.href}?word=${encodedWord}`;

    navigator.clipboard.writeText(shareUrl);

    setShared(true);

    setTimeout(() => setShared(false), 3000);
  }

  return (
    <section className="relative py-8 space-y-8">
      <article className="text-center">
        <p>
          Can you guess the Tailwind CSS
          <br className="sm:hidden" /> class name from {classCount} options?
        </p>
      </article>

      <div className="space-y-1 overflow-auto">
        <GridGuesses guesses={guesses} />

        <GridPlaceholder rows={5 - guesses.length} squares={word.split("")} />
      </div>

      <div className="flex justify-center gap-4">
        <button
          className="p-3 text-sm text-white bg-gray-800 rounded-lg hover:text-gray-300"
          onClick={restartGame}
        >
          New Class Name
        </button>

        <button
          className="p-3 text-sm text-white bg-gray-800 rounded-lg hover:text-gray-300"
          onClick={shareGame}
        >
          Play With a Friend
        </button>
      </div>

      {shared && <GameShared />}

      <div className="fixed inset-x-0 bottom-0 py-8 bg-gray-900">
        <div className="max-w-xl px-4 mx-auto">
          {error && <p className="text-center text-red-500">{error}</p>}

          {win && <ResultWin handleRestartGame={() => restartGame()} />}

          {lost && (
            <ResultLost handleRestartGame={() => restartGame()} word={word} />
          )}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              checkGuess();
            }}
            className="pt-8 mt-8 border-t border-gray-800"
          >
            <fieldset
              className="flex gap-4 disabled:opacity-50 disabled:pointer-events-none"
              disabled={win || lost}
            >
              <div className="relative flex-1">
                <input
                  className="w-full py-3 pl-3 pr-12 text-sm bg-gray-800 border border-gray-700 rounded-lg"
                  value={guess}
                  onChange={(e) => setGuess(e.target.value.toLowerCase())}
                  placeholder="Enter guess"
                  min={word.length}
                  max={word.length}
                />

                <span className="absolute text-xs -translate-y-1/2 right-3 top-1/2">
                  {guess.length}/{word.length}
                </span>
              </div>

              <button
                className="p-3 text-sm text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
                type="submit"
              >
                Submit Guess
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  );
}
