import Results from '@/components/Results';
import { IData } from '@/types/types';

const API_KEY = process.env.API_KEY;

type Props = {
  params?: {
    num?: string;
  };
  searchParams?: {
    genre?: string;
  };
};

// type Props = {
//   params: { slug: string };
//   searchParams?: { [key: string]: string | string[] | undefined };
// };

export default async function Home({ searchParams }: Props) {
  const genre = searchParams?.genre || 'getTrending';
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === 'getTopRated' ? 'movie/top_rated' : 'trending/all/week'
    }?api_key=${API_KEY}&language=en_US&page=1`,
    { next: { revalidate: 10000 } }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = (await res.json()) as IData;

  return (
    <div>
      <Results results={data.results} />
    </div>
  );
}
