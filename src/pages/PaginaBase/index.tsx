import { Outlet } from "react-router-dom"
import Cabecalho from "../../components/Cabecalho"
import Container from "../../components/Container"
import Rodape from "../../components/Rodape"

const PaginaBase = () => {
    return(
        <>
        <Cabecalho/>
        <Container>
            <Outlet/>
        </Container>
        <Rodape/>
        </>
    )
}

export default PaginaBase