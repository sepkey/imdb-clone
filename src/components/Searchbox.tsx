'use client';
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react';

export default function Searchbox() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-6xl m-auto justify-between items-center px-5"
    >
      <input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        type="text"
        placeholder="Search keywords..."
        className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1"
      />
      <button
        type="submit"
        disabled={!search}
        className="text-teal-500 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
}
