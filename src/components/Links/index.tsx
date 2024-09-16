import { Link } from 'react-router-dom'
import styles from './Links.module.css'
import { ReactElement } from 'react'

interface CabecalhoLinkProps {
    url: string
    children: string | ReactElement
}

const Links = ({url,children}: CabecalhoLinkProps) => {
    return (
        <Link to={url} className={styles.link}>
            {children}
        </Link>
    )
}

export default Links