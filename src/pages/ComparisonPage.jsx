// pages/ComparisonPage.jsx
import React, { useState } from 'react';
import InsightIntro from '../sections/InsightIntro';
import ControlSection from '../sections/ControlSection';
import ComparisonSection from '../sections/ComparisonSection';
import ComplexitySection from '../sections/ComplexitySection';
import ConclusionSection from '../sections/ConclusionSection';
import { generatePascalIterative } from '../algorithms/pascalIterative';
import { generatePascalRecursive } from '../algorithms/pascalRecursive';

export default function ComparisonPage() {
  const [n, setN] = useState(null);
  const [iterativeData, setIterativeData] = useState(null);
  const [recursiveData, setRecursiveData] = useState(null);
  const [iterativeTime, setIterativeTime] = useState(null);
  const [recursiveTime, setRecursiveTime] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = (inputN) => {
    setIsLoading(true);
    
    // Small delay to show loading state
    setTimeout(() => {
      // Measure iterative
      const startIterative = performance.now();
      const iterResult = generatePascalIterative(inputN);
      const endIterative = performance.now();
      
      // Measure recursive
      const startRecursive = performance.now();
      const recResult = generatePascalRecursive(inputN);
      const endRecursive = performance.now();
      
      setN(inputN);
      setIterativeData(iterResult);
      setRecursiveData(recResult);
      setIterativeTime(endIterative - startIterative);
      setRecursiveTime(endRecursive - startRecursive);
      setIsLoading(false);
      
      // Smooth scroll to comparison
      setTimeout(() => {
        document.querySelector('#comparison')?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      }, 100);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <InsightIntro />
      <ControlSection onGenerate={handleGenerate} isLoading={isLoading} />
      
      <div id="comparison">
        <ComparisonSection
          iterativeData={iterativeData}
          recursiveData={recursiveData}
          iterativeTime={iterativeTime}
          recursiveTime={recursiveTime}
          n={n}
        />
      </div>
      
      {iterativeData && recursiveData && (
        <>
          <ComplexitySection currentN={n} />
          <ConclusionSection />
        </>
      )}
      
      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-8 text-center text-sm text-gray-500">
        <p>Pascal's Triangle Algorithm Comparison • Built with React</p>
      </footer>
    </div>
  );
}