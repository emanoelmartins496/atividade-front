import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Alunos from "./pages/Alunos"
import Cursos from "./pages/Cursos"
import EditarAluno from "./pages/EditarAluno"
import EditarCurso from "./pages/EditarCurso"
import NovoAluno from "./pages/NovoAluno"
import NovoCurso from "./pages/NovoCurso"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alunos" element={<Alunos/>} />
          <Route path="/alunos/novo" element={<NovoAluno />} />
          <Route path="/alunos/editar/:id" element={<EditarAluno />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/cursos/novo" element={<NovoCurso />} />
          <Route path="/cursos/editar/:id" element={<EditarCurso />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
