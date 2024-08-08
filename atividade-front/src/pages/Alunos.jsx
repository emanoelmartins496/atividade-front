import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteAluno, getAlunos } from "../api/alunos"
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import toast from "react-hot-toast";


function Alunos() {

  const [alunos, setAlunos] = useState(null);

  function carregarAluno() {
    getAlunos().then((dados) => {
      setAlunos(dados);
    });
  }
  function deletarAluno(id) {
    const deletar = confirm("Tem certeza que deseja excluir?");
    if (deletar) {
      deleteAluno(id).then((resposta) => {
        toast.success(resposta.message);
        carregarAluno();
      })

    }

  }
  useEffect(() => {
    carregarAluno();
  }, []);

  return (
    <main className="mt-4 container">
      <h1>Alunos</h1>
       <Button as={Link} to="/alunos/novo">
        Adicionar Aluno
      </Button>
      <hr />
      {alunos ? (
        <Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Telefone</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {alunos.map((alunos) => {
              return (
                <tr key={alunos.id}>
                  <td>{alunos.nome}</td>
                  <td>{alunos.email}</td>
                  <td>{alunos.telefone}</td>
                  <td>
                    <Button variant="danger" size="sm" onClick={() => deletarAluno(alunos.id)}>
                      Excluir
                    </Button>
                    <Button size="sm" as={Link} to={`/alunos/editar/${alunos.id}`}>
                      Editar
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <Loader />
      )}
    </main>
  );


}

export default Alunos