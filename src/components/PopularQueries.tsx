import React from 'react';
export default function PopularQueries() {
  return (
    <div className="p-6">
      <h2 className="text-blue text-end text-xl mb-4">חיפושים פופולריים</h2>
      <div className="flex gap-2 justify-end flex-wrap">
        {["חתונות", "אירועים", "נוף", "סטודיו", "תמונות חופשיות"].map((q, i) => (
          <span key={i} className="bg-white border border-blue px-4 py-2 rounded-full text-blue">
            {q}
          </span>
        ))}
      </div>
    </div>
  );
}