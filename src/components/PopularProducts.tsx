import React from 'react';
export default function PopularProducts() {
  return (
    <div className="p-6">
      <h2 className="text-blue text-end text-xl mb-4">מוצרים פופולריים</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[1,2,3].map(i => (
          <div key={i} className="border rounded p-4 text-center bg-white shadow">
            מוצר {i}
          </div>
        ))}
      </div>
    </div>
  );
}