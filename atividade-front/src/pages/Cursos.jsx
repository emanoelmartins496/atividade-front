import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteCurso, getCurso } from "../api/cursos";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import toast from "react-hot-toast";

function Cursos() {
  const [cursos, setCursos] = useState(null);

  function carregarCurso() {
    getCurso().then((dados) => {
      setCursos(dados);
    });
  }

  function deletarCurso(id) {
    const deletar = confirm("Tem certeza que deseja excluir?");
    if (deletar) {
      deleteCurso(id).then((resposta) => {
        toast.success(resposta.message);
        carregarCurso();
      });
    }
  }

  useEffect(() => {
    carregarCurso();
  }, []);

  return (
    <main className="mt-4 container">
      <h1>Cursos</h1>
      <Button as={Link} to="/cursos/novo">
        Adicionar Curso
      </Button>
      <hr />
      {cursos ? (
        <Table>
          <thead>
            <tr>
              <th>Tipo de Curso</th>
              <th>Módulo</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {cursos.map((curso) => (
              <tr key={curso.id}>
                <td>{curso.tiposDeCursos}</td>
                <td>{curso.modulo}</td>
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => deletarCurso(curso.id)}
                  >
                    Excluir
                  </Button>
                  <Button
                    size="sm"
                    as={Link}
                    to={`/cursos/editar/${curso.id}`}
                  >
                    Editar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <Loader />
      )}
    </main>
  );
}

export default Cursos;
