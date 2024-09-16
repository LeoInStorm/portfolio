import styles from './Projetos.module.css'
import Titulo from "../../components/Titulo"
import projetos from '../../json/projetos.json'
import CardProjetos from '../../components/CardProjetos'
const Projetos = () => {
    return(
        <>
        <Titulo>
            <h1>Projetos</h1>
        </Titulo>
        <section className={styles.container}>
        {projetos.map((projeto) => {
                    return <CardProjetos {...projeto} key={projeto.id} />
                })}
        </section>
        </>
    )
}

export default Projetos