// sections/ControlSection.jsx
import React, { useState } from 'react';

export default function ControlSection({ onGenerate, isLoading }) {
  const [n, setN] = useState(7);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (n >= 0 && n <= 20) {
      onGenerate(n);
    }
  };
  
  return (
    <section className="max-w-4xl mx-auto px-6 py-8">
      <div className="bg-white rounded-xl border-2 border-gray-200 p-6 shadow-sm">
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-end">
          <div className="flex-1">
            <label htmlFor="rows-input" className="block text-sm font-medium text-gray-700 mb-2">
              Number of rows (n)
            </label>
            <input
              id="rows-input"
              type="number"
              min="0"
              max="20"
              value={n}
              onChange={(e) => setN(Math.max(0, Math.min(20, parseInt(e.target.value) || 0)))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 
                         focus:ring-blue-500 focus:border-transparent text-lg"
              disabled={isLoading}
            />
            <p className="text-xs text-gray-500 mt-1">
              Recommended: 0-15 for best visualization
            </p>
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium
                       hover:bg-blue-700 active:bg-blue-800 disabled:bg-gray-400
                       disabled:cursor-not-allowed transition-colors shadow-sm"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Generating...
              </span>
            ) : (
              'Generate Triangle'
            )}
          </button>
        </form>
      </div>
    </section>
  );
}