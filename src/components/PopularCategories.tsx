import React from 'react';
export default function PopularCategories() {
  return (
    <div className="p-6">
      <h2 className="text-blue text-end text-xl mb-4">קטגוריות פופולריות</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[1,2,3,4,5].map(i => (
          <div key={i} className="p-4 border bg-white text-center shadow rounded">קטגוריה {i}</div>
        ))}
      </div>
    </div>
  );
}