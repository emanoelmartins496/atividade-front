import { useEffect, useState } from "react";
import { Table, Alert } from "react-bootstrap";
import { listarCursosDoAluno } from "../api/alunos";
import Loader from "../components/Loader";
import toast from "react-hot-toast";

function AlunoCursos() {
  const [cursos, setCursos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function fetchCursos() {
      try {
        const cursosData = await listarCursosDoAluno();
        console.log('Cursos recebidos:', cursosData); 
        setCursos(cursosData);
      } catch (error) {
        setErro("Erro ao carregar cursos.");
        toast.error("Erro ao carregar cursos.");
      } finally {
        setCarregando(false);
      }
    }

    fetchCursos();
  }, []);

  if (carregando) {
    return <Loader />;
  }

  if (erro) {
    return <Alert variant="danger">{erro}</Alert>;
  }

  return (
    <main className="mt-4 container">
      <h1>Cursos do Aluno</h1>
      {cursos.length > 0 ? (
        <Table striped bordered hover>
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
        <Alert variant="info">Nenhum curso encontrado.</Alert>
      )}
    </main>
  );
}

export default AlunoCursos;
