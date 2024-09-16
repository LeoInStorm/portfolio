import Links from '../Links'
import styles from './Rodape.module.css'

const Rodape = () => {
    return (
        <footer className={styles.rodape}>

                <p>Email: leo.camporesi@hotmail.com</p>
            <nav>
                <Links url='https://github.com/LeoInStorm'>
                    <img src='/images/logo-github.png' />
                </Links>
                <Links url='https://www.linkedin.com/in/leonardo-camporesi/'>
                    <img src='/images/logo-linkedin.png' />
                </Links>
            </nav>
            <p>Por Leonardo Camporesi.</p>
        </footer>
    )
}

export default Rodape