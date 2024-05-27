import styles from "../styles/credit.module.css"

interface ICreditProps {
    name: string;
    profile_path: string;
    gender: string;
    character: string;
    id: string;
}

async function getGenders(gender: string){
    return gender == "2" ? "man" : "girl";
}

export default function Credit({name, profile_path, character, gender, id}: ICreditProps){
    const genders = getGenders(gender);
    return (
        <div className={styles.credit}>
            <img src={profile_path} alt={character} />
            <p>{name}</p>
            <p>{genders}</p>
        </div>
    );
}