import styles from './Banner.module.css'


const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.textos}>
                <h2 className={styles.titulo}>
                    Olá, sou Leonardo Camporesi
                </h2>
                <h1>
                    Eu faço sites.
                </h1>
                <p>
                    Sou progamador front-end freelancer, formado em análise e desenvolvimentos de sistemas com diversos trabalhos e cursos realizados.
                    Fique a vontade em visualizar meu perfil!
                </p>
            </div>
        </div>
    )
}


export default Banner