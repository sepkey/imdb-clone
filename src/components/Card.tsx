import { IMovie } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import { title } from 'process';

type Props = {
  result: IMovie;
};
export default function Card({ result }: Props) {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
      <Link href={`/movie/${result.id}`}>
        <Image
          alt="image not available"
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity-200"
          style={{ maxWidth: '100%', height: 'auto' }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
        ></Image>
        <div className="p-2">
          <p className="line-clamp-2 text-sm">{result.overview}</p>
          <h2 className="truncate text-lg font-bold">
            {result.title || result.name}
          </h2>
          <p>{result.release_date || result.first_air_date}</p>
        </div>
      </Link>
    </div>
  );
}
