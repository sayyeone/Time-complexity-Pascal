// sections/ComplexitySection.jsx
import React from 'react';
import ComplexityChart from '../components/charts/ComplexityChart';

export default function ComplexitySection({ currentN }) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Complexity Analysis
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Visualizing how computational cost grows as n increases. 
          The gap between O(n²) and O(2ⁿ) becomes dramatic at scale.
        </p>
      </div>
      
      <ComplexityChart maxN={currentN || 15} />
      
      {/* Explanation Cards */}
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-4 h-4 bg-blue-500 rounded" />
            <h3 className="font-semibold text-gray-900">Iterative: O(n²)</h3>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            The iterative approach uses nested loops to build each row from the previous one. 
            For n rows, it performs roughly n² operations. This quadratic growth is manageable 
            even for moderately large values of n.
          </p>
        </div>
        
        <div className="bg-red-50 rounded-lg p-6 border border-red-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-4 h-4 bg-red-500 rounded" />
            <h3 className="font-semibold text-gray-900">Recursive: O(2ⁿ)</h3>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            The recursive approach without memoization recalculates the same values multiple times. 
            Each position may trigger two more recursive calls, leading to exponential growth. 
            At n=20, this means over 1 million operations compared to just 400 for iterative.
          </p>
        </div>
      </div>
    </section>
  );
}