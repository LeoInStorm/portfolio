import { BrowserRouter, Route, Routes } from "react-router-dom"
import PaginaBase from "./pages/PaginaBase"
import Inicio from "./pages/Inicio"
import NaoEncontrada from "./pages/NaoEncontrada"
import Sobremim from "./pages/Sobremim"
import Curriculo from "./pages/Curriculo"
import Projetos from "./pages/Projetos"

const AppRoutes = () => {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path='/' element={<PaginaBase />}>
      <Route index element={<Inicio/>}/>
      <Route path='/curriculo' element={<Curriculo/>}/>
      <Route path='/projetos' element={<Projetos/>}/>
      <Route path='/sobremim' element={<Sobremim/>}/>
      <Route path='*' element={<NaoEncontrada/>}/>
        
      </Route>
      
    </Routes>
    </BrowserRouter>

  )
}

export default AppRoutes
