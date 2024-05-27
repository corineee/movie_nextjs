import styles from "../styles/similar.module.css"

interface ISimilarProps {
    id: string;
    poster_path: string;
    title: string;
}

export default function Similar({id, poster_path, title}: ISimilarProps) {
    return (
        <div className={styles.similar}>
            <img src={poster_path} />
            <p>{title}</p>
        </div>
    )
}