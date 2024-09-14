import './styles.css'

export default function Card({ data: personagem }) {
    return (
        <>
            { personagem.title }
            <img src={personagem.url} alt="" />
            <img src={personagem.thumbnailUrl} alt="" />
        </>
    )
}