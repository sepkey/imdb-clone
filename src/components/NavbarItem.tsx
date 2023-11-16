'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

type Props = { title: string; param: string };

export default function NavbarItem({ param, title }: Props) {
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');
  const active = genre && genre === param;

  return (
    <div>
      <Link
        className={`m-4 hover:text-teal-600 font-semibold ${
          active &&
          'underline underline-offset-8 decoration-4 decoration-teal-500 rounded-lg'
        }`}
        href={`/?genre=${param}`}
      >
        <h1>{title}</h1>
      </Link>
    </div>
  );
}
