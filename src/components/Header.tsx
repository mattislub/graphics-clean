import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/">
          <img src="/media/logo.png" alt="לוגו" className="h-10" />
        </Link>
        <nav className="flex space-x-6">
          <Link href="/about">אודות</Link>
          <Link href="/contact">צור קשר</Link>
          <Link href="/images">גלריה</Link>
        </nav>
      </div>
    </header>
  );
}
