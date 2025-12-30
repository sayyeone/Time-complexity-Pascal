// sections/ComparisonSection.jsx
import React from 'react';
import IterativePanel from '../components/panels/IterativePanel';
import RecursivePanel from '../components/panels/RecursivePanel';

export default function ComparisonSection({ 
  iterativeData, 
  recursiveData, 
  iterativeTime,
  recursiveTime,
  n 
}) {
  const hasData = iterativeData && recursiveData;
  
  if (!hasData) {
    return (
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="text-center py-16 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300">
          <div className="text-6xl mb-4">📐</div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Ready to Compare
          </h3>
          <p className="text-gray-500">
            Enter a value for n above and click "Generate Triangle" to see both algorithms in action
          </p>
        </div>
      </section>
    );
  }
  
  return (
    <section className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Side-by-Side Comparison
        </h2>
        <p className="text-gray-600">
          Same input (n = {n}), different approaches, different performance
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <IterativePanel 
          triangleData={iterativeData} 
          executionTime={iterativeTime}
        />
        
        <RecursivePanel 
          triangleData={recursiveData} 
          executionTime={recursiveTime}
          showWarning={n > 12}
        />
      </div>
      
      {/* Quick Stats */}
      {iterativeTime !== undefined && recursiveTime !== undefined && (
        <div className="mt-6 bg-gray-50 rounded-lg p-4 border border-gray-200">
          <div className="flex items-center justify-center gap-8 text-sm">
            <div className="text-center">
              <div className="text-gray-600 mb-1">Speed Difference</div>
              <div className="text-2xl font-bold text-gray-900">
                {(recursiveTime / iterativeTime).toFixed(1)}x
              </div>
              <div className="text-xs text-gray-500">slower (recursive)</div>
            </div>
            
            <div className="h-12 w-px bg-gray-300" />
            
            <div className="text-center">
              <div className="text-gray-600 mb-1">Time Saved</div>
              <div className="text-2xl font-bold text-green-600">
                {(recursiveTime - iterativeTime).toFixed(2)}ms
              </div>
              <div className="text-xs text-gray-500">by using iterative</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}