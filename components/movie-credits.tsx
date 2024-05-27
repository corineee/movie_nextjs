"use client"

import { getMovie } from "./movie-info";
import styles from "../styles/movie-info.module.css";
import Credit from "./credit";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { API_URL } from "../app/constants";

export async function getCredit(id: string) {
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
}

export default async function MovieCredits({ id }: { id: string }) {
  const movie = await getMovie(id);
  const credits = await getCredit(id);

  return (
    <div className={styles.container}>
      <img
        src={movie.poster_path}
        className={styles.poster}
        alt={movie.title}
      />
      <Swiper
        modules={[Navigation, Scrollbar]}
        spaceBetween={50}
        slidesPerView={4}
        navigation
        loop={true}
        scrollbar={{draggable: true}}
        autoplay={false}
        className={styles.test}
      >
        {credits.map((credit) => (
          <SwiperSlide>
            <Credit
              key={credit.id}
              id={credit.id}
              profile_path={credit.profile_path}
              name={credit.name}
              character={credit.character}
              gender={credit.gender}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
