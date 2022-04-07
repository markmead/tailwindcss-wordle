import { useState, useEffect } from "react";

export const Settings = () => {
  let [open, setOpen] = useState(false);
  let [min, setMin] = useState(0);
  let [max, setMax] = useState(0);
  let [plugins, setPlugins] = useState(false);
  let [lengthError, setLengthError] = useState(false);

  useEffect(() => {
    const usePlugins = JSON.parse(localStorage.getItem("usePlugins")) || false;
    const minLength = localStorage.getItem("minLength") || 3;
    const maxLength = localStorage.getItem("maxLength") || 25;

    setPlugins(usePlugins);
    setMin(minLength);
    setMax(maxLength);
  }, []);

  function togglePlugins(newValue) {
    localStorage.setItem("usePlugins", newValue);

    setPlugins(newValue);
  }

  function handleMin(newValue) {
    localStorage.setItem("minLength", newValue);

    setMin(newValue);
  }

  function handleMax(newValue) {
    localStorage.setItem("maxLength", newValue);

    setMax(newValue);
  }

  useEffect(() => {
    setLengthError(Number(min) > Number(max));
  }, [min, max]);

  function refreshGame() {
    const customEvent = new Event("refreshGame");

    document.dispatchEvent(customEvent);

    setOpen(false);
  }

  return (
    <div className="relative">
      <span className="flex">
        <button onClick={() => setOpen(!open)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>
      </span>

      {open && (
        <div className="absolute right-0 top-auto z-10 w-64 p-4 mt-2 space-y-6 bg-gray-800 rounded-lg">
          <div>
            <label htmlFor="plugins" className="flex items-center gap-4">
              <input
                type="checkbox"
                id="plugins"
                name="plugins"
                checked={plugins}
                value={plugins}
                onChange={() => togglePlugins(!plugins)}
                className="w-5 h-5 rounded accent-indigo-600"
              />

              <span className="text-sm font-medium">Include plugins?</span>
            </label>
          </div>

          <div>
            <label htmlFor="min">
              <p className="block text-sm font-medium">Min class name length</p>

              <div className="flex items-center gap-4 mt-1">
                <input
                  type="range"
                  id="min"
                  name="min"
                  min="3"
                  max="25"
                  step="1"
                  onChange={(e) => handleMin(e.target.value)}
                  value={min}
                  className="w-full accent-indigo-600"
                />

                <span className="font-mono text-xs">{min}</span>
              </div>
            </label>
          </div>

          <div>
            <label htmlFor="max">
              <p className="block text-sm font-medium">Max class name length</p>

              <div className="flex items-center gap-4 mt-1">
                <input
                  type="range"
                  id="max"
                  name="max"
                  min="3"
                  max="25"
                  step="1"
                  onChange={(e) => handleMax(e.target.value)}
                  value={max}
                  className="w-full accent-indigo-600"
                />

                <span className="font-mono text-xs">{max}</span>
              </div>
            </label>
          </div>

          {lengthError && (
            <p className="text-center text-red-500">
              Max length must be greater than min length
            </p>
          )}

          <button
            onClick={() => refreshGame()}
            className="flex items-center justify-between w-full p-3 text-sm text-white bg-gray-700 rounded-lg hover:text-gray-300 disabled:opacity-25 disabled:cursor-not-allowed"
            disabled={lengthError}
          >
            Refresh with New Settings
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};
