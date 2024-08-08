import { Button } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import toast from "react-hot-toast"
import { useEffect } from "react"
import { getCurso, updateCurso } from "../api/cursos"

function EditarCurso() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const navigate = useNavigate()
  const { id } = useParams()

  function atualizarCurso(data) {
    updateCurso(id, data)
      .then((resposta) => {
        toast.success(resposta.message)
        navigate("/cursos")
      })
      .catch((err) => {
        toast.error(err.response.data.message)
      })
  }

  function carregarCurso() {
    getCurso(id)
      .then((dados) => {
        reset(dados)
      })
      .catch((err) => {
        navigate("/cursos")
      })
  }

  useEffect(() => {
    carregarCurso()
  }, [])

  return (
    <main className="mt-4 container">
      <h1>Editar Curso</h1>
      <hr />
      <form onSubmit={handleSubmit(atualizarCurso)}>
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
            {...register("modulo", { required: true, min: 1 })}
          />
          {errors.modulo && (
            <small className="text-danger">O módulo é inválido!</small>
          )}
        </div>
        <Button className="mt-3" type="submit">
          Atualizar
        </Button>
      </form>
    </main>
  )
}

export default EditarCurso
