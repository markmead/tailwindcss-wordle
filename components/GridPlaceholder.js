export const GridPlaceholder = ({ rows, squares }) => (
  <div className="space-y-1">
    {Array.from(Array(rows).fill("")).map((_, index) => (
      <div key={index} className="flex justify-center gap-1">
        {squares.map((_, index) => (
          <div key={index} className="w-8 h-8 bg-gray-100 rounded"></div>
        ))}
      </div>
    ))}
  </div>
);
