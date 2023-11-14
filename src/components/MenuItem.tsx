import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';

type Props = {
  title: string;
  address: string;
  Icon: IconType;
};

export default function MenuItem({ Icon, address, title }: Props) {
  return (
    <div>
      <Link href={address} className="mx-4 lg:mx-6 hover:text-teal-500">
        <Icon className="text-2xl sm:hidden mx-4" />
        <p className="hidden sm:inline my-2 text-sm">{title}</p>
      </Link>
    </div>
  );
}
