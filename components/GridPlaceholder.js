export const GridPlaceholder = ({ rows, squares }) => (
  <div className="space-y-1">
    {Array.from(Array(rows).fill("")).map((_, index) => (
      <div key={index} className="flex justify-center gap-1">
        {squares.map((_, index) => (
          <div
            key={index}
            className="w-10 h-10 bg-gray-700 rounded-sm shrink-0"
          ></div>
        ))}
      </div>
    ))}
  </div>
);
