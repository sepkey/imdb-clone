'use client';
import React, { useEffect, useState } from 'react';
import { MdOutlineLightMode } from 'react-icons/md';
import { FaRegMoon } from 'react-icons/fa';
import { useTheme } from 'next-themes';

export default function DarkModeSwitch() {
  const { setTheme, systemTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <>
      {mounted && currentTheme === 'dark' ? (
        <MdOutlineLightMode
          className="text-xl cursor-pointer hover:text-teal-500"
          onClick={() => setTheme('light')}
        />
      ) : (
        <FaRegMoon
          className="text-xl cursor-pointer hover:text-teal-500"
          onClick={() => setTheme('dark')}
        />
      )}
    </>
  );
}
