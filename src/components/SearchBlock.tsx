import React from 'react';
export default function SearchBlock() {
  return (
    <div className="p-6 flex justify-center">
      <input className="border p-2 w-1/2" placeholder="חפש..." />
      <button className="ml-2 px-4 py-2 bg-blue text-white rounded">חיפוש</button>
    </div>
  );
}