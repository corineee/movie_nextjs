import { getMovie } from "./movie-info";
import Similar from "./similar";
import styles from "../styles/movie-info.module.css"
import { API_URL } from "../app/(home)/page";

export async function getSimilar(id: string) {
  const response = await fetch(`${API_URL}/${id}/similar`);
  return response.json();
}

export default async function MovieSimilar({ id }: { id: string }) {
  const movie = await getMovie(id);
  const similar = await getSimilar(id);

  return (
    <div className={styles.container}>
      <img src={movie.poster_path} alt={movie.title} className={styles.poster} />
      <div className={styles.test}>
        {similar.slice(0, 8).map((sim) => (
          <Similar
            key={sim.id}
            id={sim.id}
            poster_path={sim.poster_path}
            title={sim.title}
          />
        ))}
      </div>
    </div>
  );
}
