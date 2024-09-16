import styles from './Sobremim.module.css'
import Titulo from "../../components/Titulo"
const Sobremim = () => {

    return (
        <>
            <Titulo>
                <h1>Sobre mim</h1>
            </Titulo>
            <div className={styles.container}>
                <h1>
                    Olá, eu sou Leonardo Santos Camporesi, desenvolvedor front end vanilla e react, moro em São Paulo-SP.<br /><br />
                    Venho trabalhando na jornada de t.i desde 2022, já trabalhei para arquitetura e soluções,
                    e desde 2024 ano meu foco é o front-end.
                </h1>
                <h2>
                    Trabalho
                </h2>
                <p>
                    Atualmente trabalho como freelancer, dedicado a criar os melhores projetos com clean code, ótima responsividade e design impecável.
                </p>
                <h2>
                    Trajetoria
                </h2>
                <p>
                    Formado em projetos mecânicos, no começo da carreira me dediquei a trabalhar na área da qualidade,obtive grandes aprendizados,
                    tive ótimos lideres e tutores, mas apesar de toda trajetória e todas as portas se abrindo sentia que aquilo ainda não era meu lugar.<br /><br />
                    Durante a pandemia, tive a certeza que meu mundo era na t.i, então em 2022 me dediquei aquilo que sempre foi o meu sonho e comecei a cursar
                    Análise e Desenvolvimento de sistemas, durante meu curso consegui estagiar em arquitetura e soluções técnica, de lá pra ca, obtivo muito bons
                    resultados, novamente tive grandes tutores e também desenvolvi a paixão pelo front-end.
                </p>
                <h2>
                    Offline
                </h2>
                <p>
                    Quando finalmente não estou programando adoro sair com meus amigos, praticar exercícios físicos como ir pra academia, jogar vôlei e futebol.
                    Adoro jogar video game, e assistir dos mais diversos filmes e desenhos.
                </p>
            </div>
        </>

    )
}

export default Sobremim