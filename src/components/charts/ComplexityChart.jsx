// components/charts/ComplexityChart.jsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { generateComplexityData, formatComplexity } from '../../utils/complexity';

export default function ComplexityChart({ maxN = 15 }) {
  const data = generateComplexityData(maxN);
  
  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 p-6">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="n" 
            label={{ value: 'n (rows)', position: 'insideBottom', offset: -5 }}
            stroke="#6b7280"
          />
          <YAxis 
            label={{ value: 'Operations', angle: -90, position: 'insideLeft' }}
            tickFormatter={formatComplexity}
            stroke="#6b7280"
          />
          <Tooltip 
            formatter={(value) => formatComplexity(value)}
            contentStyle={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid #e5e7eb',
              borderRadius: '8px'
            }}
          />
          <Legend 
            wrapperStyle={{ paddingTop: '20px' }}
            iconType="line"
          />
          <Line 
            type="monotone" 
            dataKey="iterative" 
            stroke="#3b82f6" 
            strokeWidth={2}
            name="Iterative O(n²)"
            dot={{ fill: '#3b82f6', r: 3 }}
          />
          <Line 
            type="monotone" 
            dataKey="recursive" 
            stroke="#ef4444" 
            strokeWidth={2}
            name="Recursive O(2ⁿ)"
            dot={{ fill: '#ef4444', r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}