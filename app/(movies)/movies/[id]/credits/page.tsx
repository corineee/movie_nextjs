import { Suspense } from "react";
import { getMovie } from "../../../../../components/movie-info";
import MovieVideos from "../../../../../components/movie-videos";
import MovieCredits from "../../../../../components/movie-credits";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function CreditPage({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie credit</h1>}>
        <MovieCredits id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
