import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";


export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  //아래 코드는 5초씩 실행되는데 movie가 끝난 후 videos가 콘솔에 찍힌다.
    //const movie = await getMovie(id);
    //const videos = await getVideos(id);

    // 병렬구조로 같이 실행되기 위해서는 Promise.all을 사용한다.
    // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  return <div>
    <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id}/>
    </Suspense>
    <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id}/>
    </Suspense>
  </div>
}


//const ComponentName = async() => {}