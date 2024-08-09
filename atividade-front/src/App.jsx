import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Rodape from "./components/Rodape"
import Home from "./pages/Home"
import Alunos from "./pages/Alunos"
import Cursos from "./pages/Cursos"
import EditarAluno from "./pages/EditarAluno"
import NovoAluno from "./pages/NovoAluno"
import Login from "./pages/Login"
import Sobre from "./pages/Sobre"
import Contato from "./pages/Contato"
import AlunoCursos from "./pages/AlunosCursos"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/alunos" element={<Alunos />} />
          <Route path="/alunos/cursos" element={< AlunoCursos/>} />
          <Route path="/alunos/novo" element={<NovoAluno />} />
          <Route path="/alunos/editar/:id" element={<EditarAluno />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Rodape />
      </BrowserRouter>
    </>
  )
}

export default App
