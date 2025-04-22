import React from 'react';
interface PageTitleProps { title: string; subtitle: string; }
export default function PageTitle({ title, subtitle }: PageTitleProps) {
  return (
    <div className="text-end p-6">
      <h1 className="text-5xl font-bold text-white">{title}</h1>
      <h2 className="text-2xl text-white mt-2">{subtitle}</h2>
    </div>
  );
}