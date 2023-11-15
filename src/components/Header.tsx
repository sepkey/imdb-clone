import Link from 'next/link';
import MenuItem from './MenuItem';
import { AiOutlineHome, AiOutlineInfoCircle } from 'react-icons/ai';
import DarkModeSwitch from './DarkModeSwitch';

export default function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex">
        <MenuItem title="HOME" address="/" Icon={AiOutlineHome} />
        <MenuItem title="ABOUT" address="/about" Icon={AiOutlineInfoCircle} />
      </div>
      <div className="flex items-center space-x-5">
        <DarkModeSwitch />
        <Link href="/">
          <h2 className="text-2xl">
            <span className="font-bold bg-teal-400 rounded-lg py-1 px-2 mr-1">
              IMDb
            </span>
            <span className="text-xl hidden sm:inline">clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}
