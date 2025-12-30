// components/panels/RecursivePanel.jsx
import React from 'react';
import PascalTriangle from '../pascal/PascalTriangle';

export default function RecursivePanel({ triangleData, executionTime, showWarning = false }) {
  return (
    <div className="bg-gradient-to-br from-red-50 to-white rounded-xl border border-red-200 p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Recursive Approach
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Top-down using function calls
          </p>
        </div>
        <div className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
          O(2ⁿ)
        </div>
      </div>
      
      {/* Warning Badge */}
      {showWarning && (
        <div className="mb-4 bg-amber-50 border border-amber-200 rounded-lg p-3 flex items-start gap-2">
          <span className="text-amber-600 text-lg">⚠️</span>
          <div className="text-sm text-amber-800">
            <strong>Performance warning:</strong> May become slow for n &gt; 15
          </div>
        </div>
      )}
      
      {/* Performance Badge */}
      {executionTime !== undefined && (
        <div className="mb-4 flex items-center gap-2 text-sm">
          <span className="text-gray-600">Execution time:</span>
          <span className="font-mono text-red-600 font-medium">
            {executionTime.toFixed(3)}ms
          </span>
        </div>
      )}
      
      {/* Triangle Display */}
      <div className="bg-white rounded-lg p-4 border border-red-100">
        <PascalTriangle data={triangleData} />
      </div>
      
      {/* Info Footer */}
      <div className="mt-4 text-xs text-gray-500 bg-red-50 rounded-lg p-3">
        <strong>How it works:</strong> Calculates each value by recursively summing two previous positions.
        Simple to understand but exponentially slower.
      </div>
    </div>
  );
}