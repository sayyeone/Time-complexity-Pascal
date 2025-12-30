// utils/complexity.js

export function generateComplexityData(maxN = 15) {
  const data = [];
  
  for (let n = 0; n <= maxN; n++) {
    data.push({
      n,
      iterative: n * n, // O(n²)
      recursive: Math.pow(2, n), // O(2ⁿ)
    });
  }
  
  return data;
}

export function formatComplexity(value) {
  if (value >= 1e6) return `${(value / 1e6).toFixed(1)}M`;
  if (value >= 1e3) return `${(value / 1e3).toFixed(1)}K`;
  return value.toString();
}

export function estimateExecutionTime(n, method = 'iterative') {
  const baseTime = 0.1;
  
  if (method === 'iterative') {
    return baseTime * n * n;
  } else {
    return baseTime * Math.pow(2, n);
  }
}

export function comparePerformance(n) {
  const iterativeOps = n * n;
  const recursiveOps = Math.pow(2, n);
  
  return {
    iterativeOps,
    recursiveOps,
    ratio: recursiveOps / iterativeOps,
    difference: recursiveOps - iterativeOps,
  };
}