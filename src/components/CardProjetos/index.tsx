import { Link } from 'react-router-dom'
import styles from './CardProjetos.module.css'

interface CardProjetosProps {
    capa: string
    titulo: string
    destino: string
    texto: string
    tecnologia: string
}
const CardProjetos = ({ destino, capa, titulo, texto, tecnologia }: CardProjetosProps) => {
    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`${destino}`}>
                <img src={capa} alt={titulo} className={styles.capa} />
                <h2>{titulo}</h2>
                <p>
                    {texto}<br /><br />
                    {tecnologia}
                </p>
            </Link>
        </div>
    )
}

export default CardProjetos