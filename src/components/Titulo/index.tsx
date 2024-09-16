import { ReactElement } from 'react'
import styles from './Titulo.module.css'
interface TituloProps {
    children: ReactElement | string
}

const Titulo = ({ children }: TituloProps) => {
    return (
        <div className={styles.container}>
            {children}
        </div>

    )
}
export default Titulo