'use client';

import { useEffect } from 'react';

type Props = {
  error: String;
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center mt-10">
      <h1>Something went wrong</h1>
      <button className="hover:text-teal-700" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
