import Banner from "../../components/Banner"
import styles from './Inicio.module.css'
import atalhos from '../../json/db.json'
import Card from "../../components/Card"
const Inicio = () => {

    return (
        <>
            <Banner imagem="usuario" />
            <section className={styles.container}>
            {atalhos.map((atalho) => {
                    return <Card {...atalho} key={atalho.id} />
                })}
            </section>
        </>
    )
}

export default Inicio