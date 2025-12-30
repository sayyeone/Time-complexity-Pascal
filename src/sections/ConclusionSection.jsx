// sections/ConclusionSection.jsx
import React from 'react';

export default function ConclusionSection() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Key Takeaways
        </h2>
        
        <div className="space-y-4 text-gray-700">
          <p className="leading-relaxed">
            For small values of n (roughly 0-10), both algorithms produce results quickly enough 
            that the performance difference isn't noticeable in practice. However, as n grows, 
            the exponential nature of the recursive approach becomes a critical bottleneck.
          </p>
          
          <p className="leading-relaxed">
            The iterative method's O(n²) complexity scales predictably and remains efficient 
            even for larger triangles. In contrast, the recursive O(2ⁿ) complexity grows so 
            rapidly that values beyond n=20 become computationally expensive without optimization 
            techniques like memoization.
          </p>
          
          <p className="leading-relaxed font-medium text-gray-900">
            This comparison illustrates an important principle in algorithm design: 
            a simpler implementation isn't always better. Understanding complexity helps 
            us choose the right approach for the problem scale.
          </p>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-300">
          <h3 className="font-semibold text-gray-900 mb-2">Next Steps</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Try implementing a memoized recursive version to see the improvement</li>
            <li>• Explore dynamic programming as a middle ground approach</li>
            <li>• Apply these concepts to other recursive problems like Fibonacci numbers</li>
          </ul>
        </div>
      </div>
    </section>
  );
}