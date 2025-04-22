import React from 'react';
export default function AdvertisingBlocks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
      {[1,2,3].map(i => (
        <div key={i} className="p-4 border bg-white rounded shadow">בלוק פרסום {i}</div>
      ))}
    </div>
  );
}