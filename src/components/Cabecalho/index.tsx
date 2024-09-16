import { Link } from 'react-router-dom'
import styles from './Cabecalho.module.css'
import Links from '../Links'

const Cabecalho = () => {
    return(
       <header className={styles.cabecalho}>
        <Link to='./' className={styles.link}>
            <h1>Leonardo Camporesi</h1>
        </Link>
        <nav>
            <Links url='./curriculo'>
                Curriculo
            </Links>
            <Links url='./projetos'>
                Projetos
            </Links>
            <Links url='./sobremim'>
                Sobre mim
            </Links>
        </nav>
       </header>
    )

}

export default Cabecalho