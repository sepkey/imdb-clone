import { IMovie } from '@/types/types';

type Props = {
  results: IMovie[];
};

export default function Results({ results }: Props) {
  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>{result.original_title}</div>
      ))}
    </div>
  );
}
