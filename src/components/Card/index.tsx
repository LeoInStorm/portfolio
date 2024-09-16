import { Link } from 'react-router-dom'
import styles from './Card.module.css'
import Botao from '../Botao'

interface CardProps{
    capa:string
    titulo: string
    destino: string
}
const Card = ({destino, capa, titulo}:CardProps) => {
    return(
        <div className={styles.container}>
            <img src={capa} alt={titulo} className={styles.capa}/>
            <h2>{titulo}</h2>
            <Link className={styles.link} to={`/${destino}`}>
                <Botao>Ver</Botao>
            </Link>
        </div>
    )
}

export default Card