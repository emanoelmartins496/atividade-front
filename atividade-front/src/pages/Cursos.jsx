import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteCurso, getCursos } from "../api/cursos";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import toast from "react-hot-toast";

function Cursos() {
  const [cursos, setCursos] = useState(null);

  function carregarCurso() {
    getCursos().then((dados) => {
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
      <hr />
      {cursos ? (
        <Table>
          <thead>
            <tr>
              <th>Tipo de Curso</th>
              <th>Módulo</th>
            </tr>
          </thead>
          <tbody>
            {cursos.map((curso) => (
              <tr key={curso.id}>
                <td>{curso.tiposDeCursos}</td>
                <td>{curso.modulo}</td>
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
