"use client"

import Link from "next/link";
import styles from "../styles/movie.module.css"
import { useRouter } from "next/navigation";

interface IMovieProps {
    title: string;
    id: string;
    poster_path: string;
}

export default function Movie({title, id, poster_path}: IMovieProps) {
    //img클릭시 상세페이지로 이동하기 위해 useRouter()를 사용해준다.
    const router = useRouter();
    const onClick = () => {
        router.push(`/movies/${id}`);
    }
    return (
        <div className={styles.movie}>
            <img src={poster_path} alt={title} onClick={onClick} />
            <Link href={`/movies/${id}`}>{title}</Link>
        </div>
    )
}