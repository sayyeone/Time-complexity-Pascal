// components/panels/IterativePanel.jsx
import React from 'react';
import PascalTriangle from '../pascal/PascalTriangle';

export default function IterativePanel({ triangleData, executionTime }) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-200 p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Iterative Approach
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Bottom-up construction using loops
          </p>
        </div>
        <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
          O(n²)
        </div>
      </div>
      
      {/* Performance Badge */}
      {executionTime !== undefined && (
        <div className="mb-4 flex items-center gap-2 text-sm">
          <span className="text-gray-600">Execution time:</span>
          <span className="font-mono text-blue-600 font-medium">
            {executionTime.toFixed(3)}ms
          </span>
        </div>
      )}
      
      {/* Triangle Display */}
      <div className="bg-white rounded-lg p-4 border border-blue-100">
        <PascalTriangle data={triangleData} />
      </div>
      
      {/* Info Footer */}
      <div className="mt-4 text-xs text-gray-500 bg-blue-50 rounded-lg p-3">
        <strong>How it works:</strong> Builds each row by summing adjacent values from the previous row.
        Space-efficient and predictable performance.
      </div>
    </div>
  );
}