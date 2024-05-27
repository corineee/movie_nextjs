import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface IParams {
  params: { id: string };
}

//metaData를 동적으로 가져오기 위해 generateMetadata를 사용
//export가 필수 (프레임워크가 항상 이 함수를 찾기때문)
export async function generateMetadata({ params: { id } }: IParams) {
  //getMovie가 2번 호출됨(generateMetadata, movie-info)
  //하지만 요청은 캐싱이 되기 때문에 2번 호출되도 나쁘지않다.
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetailPage({ params: { id } }: IParams) {
  //아래 코드는 5초씩 실행되는데 movie가 끝난 후 videos가 콘솔에 찍힌다.
  //const movie = await getMovie(id);
  //const videos = await getVideos(id);

  // 병렬구조로 같이 실행되기 위해서는 Promise.all을 사용한다.
  // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}

//const ComponentName = async() => {}
