// algorithms/pascalRecursive.js

// Classic recursive approach - simple but exponential
function pascalValue(row, col) {
  if (col === 0 || col === row) return 1;
  return pascalValue(row - 1, col - 1) + pascalValue(row - 1, col);
}

export function generatePascalRecursive(n) {
  if (n < 0) return [];
  
  const triangle = [];
  
  for (let row = 0; row <= n; row++) {
    const currentRow = [];
    for (let col = 0; col <= row; col++) {
      currentRow.push(pascalValue(row, col));
    }
    triangle.push(currentRow);
  }
  
  return triangle;
}

// Optimized version with memoization (optional showcase)
const memo = new Map();

function pascalValueMemo(row, col) {
  if (col === 0 || col === row) return 1;
  
  const key = `${row},${col}`;
  if (memo.has(key)) return memo.get(key);
  
  const result = pascalValueMemo(row - 1, col - 1) + pascalValueMemo(row - 1, col);
  memo.set(key, result);
  return result;
}

export function generatePascalRecursiveMemo(n) {
  memo.clear(); // Reset cache
  
  if (n < 0) return [];
  
  const triangle = [];
  
  for (let row = 0; row <= n; row++) {
    const currentRow = [];
    for (let col = 0; col <= row; col++) {
      currentRow.push(pascalValueMemo(row, col));
    }
    triangle.push(currentRow);
  }
  
  return triangle;
}