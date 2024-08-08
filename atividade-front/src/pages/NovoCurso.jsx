import { Button } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import toast from "react-hot-toast"
import { addCurso } from "../api/cursos"

function NovoCurso() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  function criarCurso(data) {
    addCurso(data)
      .then((resposta) => {
        toast.success(resposta.message);
        navigate("/cursos");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  }

  return (
    <main className="mt-4 container">
      <h1>Novo Curso</h1>
      <hr />
      <form onSubmit={handleSubmit(criarCurso)}>
        <div>
          <label htmlFor="tiposDeCursos">Tipo de Curso</label>
          <input
            type="text"
            id="tiposDeCursos"
            className="form-control"
            {...register("tiposDeCursos", { required: true, maxLength: 200 })}
          />
          {errors.tiposDeCursos && (
            <small className="text-danger">O tipo de curso é inválido!</small>
          )}
        </div>
        <div>
          <label htmlFor="modulo">Módulo</label>
          <input
            type="number"
            id="modulo"
            className="form-control"
            min="1"
            {...register("modulo", { 
              required: "O módulo é obrigatório", 
              min: { value: 1, message: "O módulo deve ser pelo menos 1" } 
            })}
          />
          {errors.modulo && (
            <small className="text-danger">O módulo é inválido!</small>
          )}
        </div>
        <Button className="mt-3" type="submit">
          Cadastrar
        </Button>
      </form>
    </main>
  );
}

export default NovoCurso;
