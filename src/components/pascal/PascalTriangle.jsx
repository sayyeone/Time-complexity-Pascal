// components/pascal/PascalTriangle.jsx
import React from 'react';

export default function PascalTriangle({ data, maxDisplay = 10 }) {
  if (!data || data.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No data to display
      </div>
    );
  }
  
  // Limit display rows if too many
  const displayData = data.slice(0, maxDisplay + 1);
  const isTruncated = data.length > displayData.length;
  
  return (
    <div className="w-full overflow-x-auto">
      <div className="inline-block min-w-full py-4">
        {displayData.map((row, rowIdx) => (
          <div 
            key={rowIdx}
            className="flex justify-center items-center gap-2 mb-2"
          >
            {row.map((value, colIdx) => (
              <div
                key={colIdx}
                className="w-12 h-12 flex items-center justify-center 
                           bg-blue-50 border border-blue-200 rounded-lg
                           text-sm font-medium text-blue-900
                           hover:bg-blue-100 transition-colors"
              >
                {value}
              </div>
            ))}
          </div>
        ))}
        
        {isTruncated && (
          <div className="text-center text-sm text-gray-500 mt-4">
            ... and {data.length - displayData.length} more rows
          </div>
        )}
      </div>
    </div>
  );
}