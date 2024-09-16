import styles from './Curriculo.module.css'
import Titulo from "../../components/Titulo"

const Curriculo = () => {
    return (
        <>
            <Titulo>
                <h1>Curriculo</h1>
            </Titulo>
            <div className={styles.container}>
                <h2>Tecnologias</h2>
                <section>
                <img src='https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white'/>
                <img src='https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white'/>
                <img src='https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E'/>
                </section>
                <section>
                <img src='https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB'/>
                <img src='https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB'/>
                <img src='https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white'/>
                </section>
                <section>
                <img src='https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white'/>
                <img src='https://img.shields.io/badge/kotlin-%237F52FF.svg?style=for-the-badge&logo=kotlin&logoColor=white'/>
                <img src='https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white'/>
                </section>

                <h2>Experiência</h2>
                <p>
                    Unimed Nacional / Estágio em Arquitetura e Negócios de TI<br />
                    SET de 2022 - DEZ de 2023<br />
                    ● Realizei diversos mapeamentos de Sistemas e APIs para o CMDB;<br />
                    ● Suporte com integração de APIs;<br />
                    ● Migração de plataforma de gerenciamento de APIs;<br />
                    ● Condução de estudos para implementação de novos softwares;<br />
                    ● Familiarizado com plataformas de gerenciamento de projetos como Trello e Jira;<br />
                    ● Familiarizado com modelo ágil e cascata.<br /><br />

                    Baker Hughes / Estágio em Qualidade<br />
                    JAN de 2020 - JAN de 2022<br />
                    ● Atuei com auditorias internas de produto e pessoa;<br />
                    ● Gestão da qualidade;<br />
                    ● Ações corretivas e Preventivas;<br />
                    ● Relatórios Semanais de não conformidades;<br />
                    ● Dashboards interativos de não conformidades.<br />
                </p>
                <h2>Formação</h2>
                <p>
                    Análise e Desenvolvimento de Sistemas / UNIP / Superior<br />
                    JAN de 2022 - JAN de 2024<br /><br />

                    Projetos Mecânicos / Fatec-SP / Superior<br />
                    JAN de 2017 - JUN de 2021
                </p>
            </div>
        </>
    )
}

export default Curriculo