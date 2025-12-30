// sections/InsightIntro.jsx
import React from 'react';

export default function InsightIntro() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Pascal's Triangle: Algorithm Comparison
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Exploring two different approaches to generate Pascal's Triangle and 
          understanding their performance implications
        </p>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          What is Pascal's Triangle?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          Pascal's Triangle is a triangular array where each number is the sum of the two 
          numbers directly above it. Starting with 1 at the top, each row begins and ends 
          with 1, with the middle values calculated from the previous row.
        </p>
        <p className="text-gray-700 leading-relaxed">
          While the pattern is simple, the method we choose to generate it significantly 
          impacts performance. This visualization compares iterative (bottom-up) versus 
          recursive (top-down) implementations to demonstrate how algorithm choice matters 
          as data scales.
        </p>
      </div>
    </section>
  );
}