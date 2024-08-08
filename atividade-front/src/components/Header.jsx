import logo from "../../public/img/logo.png"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="header w-100 px-3 py-2">
      <nav className="container d-flex justify-content-between align-items-center">
        <Link to="/">
          <img src={logo} alt="Devnation Academy logo" />
        </Link>
        <div className="d-flex gap-5">
          <Link to="/alunos">Alunos</Link>
          <Link to="/cursos">Cursos</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
