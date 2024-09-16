import styles from './Botao.module.css'

interface BotaoProps {
    children: string
}

const Botao = ({ children }: BotaoProps) => {
    return (
        <button className={styles.container}>
            {children}
        </button>
    )
}
export default Botao