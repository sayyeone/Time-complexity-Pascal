// algorithms/pascalIterative.js

export function generatePascalIterative(n) {
  if (n < 0) return [];
  if (n === 0) return [[1]];
  
  const triangle = [[1]];
  
  for (let i = 1; i <= n; i++) {
    const prevRow = triangle[i - 1];
    const newRow = [1];
    
    // Calculate middle values
    for (let j = 0; j < prevRow.length - 1; j++) {
      newRow.push(prevRow[j] + prevRow[j + 1]);
    }
    
    newRow.push(1);
    triangle.push(newRow);
  }
  
  return triangle;
}

// Helper: calculate specific position (not used in main comparison, just bonus)
export function binomialCoeff(n, k) {
  let result = 1;
  for (let i = 0; i < k; i++) {
    result *= (n - i);
    result /= (i + 1);
  }
  return result;
}