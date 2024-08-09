import { Button } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { addAluno } from "../api/alunos"
import toast from "react-hot-toast"
import logo from "../../public/img/logo.png"

function NovoAluno() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate()

  function salvarAluno(data) {
    addAluno(data)
      .then(() => {
        toast.success("Conta criada com sucesso!")
        navigate("/login")
      })
      .catch((err) => {
        toast.error(err.response.data.message)
      })
  }

  return (
    <main className="mt-4 container">
      <form className="form-section" onSubmit={handleSubmit(salvarAluno)}>
        <img src={logo} alt="Logo" />
        <h3>Seja bem vindo (a)!</h3>
        <p className="p-login">Cadastre-se para ter acesso.</p>
        <div>
          <label htmlFor="matricula"></label>
          <input
            type="text"
            id="matricula"
            placeholder="Matrícula"
            className="form-control"
            {...register("matricula", { required: true, maxLength: 50 })}
          />
          {errors.matricula && (
            <small className="text-danger">A matrícula é inválida!</small>
          )}
        </div>
        <div>
          <label htmlFor="nome"></label>
          <input
            type="text"
            id="nome"
            placeholder="Nome"
            className="form-control"
            {...register("nome", { required: true, maxLength: 200 })}
          />
          {errors.nome && (
            <small className="text-danger">O nome é inválido!</small>
          )}
        </div>
        <div>
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="form-control"
            {...register("email", { required: true, maxLength: 200 })}
          />
          {errors.email && (
            <small className="text-danger">O email é inválido!</small>
          )}
        </div>
        <div>
          <label htmlFor="telefone"></label>
          <input
            type="tel"
            id="telefone"
            placeholder="Telefone"
            className="form-control"
            {...register("telefone", { required: true, maxLength: 15 })}
          />
          {errors.telefone && (
            <small className="text-danger">O telefone é inválido!</small>
          )}
        </div>
        <div>
          <label htmlFor="senha"></label>
          <input
            type="password"
            id="senha"
            placeholder="Senha"
            className="form-control"
            {...register("senha", { required: true, minLength: 6 })}
          />
          {errors.senha && (
            <small className="text-danger">A senha é inválida!</small>
          )}
        </div>
        <div>
          <label htmlFor="cidade"></label>
          <input
            type="text"
            id="cidade"
            placeholder="Cidade"
            className="form-control"
            {...register("endereco.cidade", { required: true, maxLength: 200 })}
          />
          {errors.endereco?.cidade && (
            <small className="text-danger">A cidade é inválida!</small>
          )}
        </div>
        <div>
          <label htmlFor="uf"></label>
          <input
            type="text"
            id="uf"
            placeholder="UF"
            className="form-control"
            {...register("endereco.uf", { required: true, maxLength: 2 })}
          />
          {errors.endereco?.uf && (
            <small className="text-danger">A UF é inválida!</small>
          )}
        </div>
        <div>
          <label htmlFor="cep"></label>
          <input
            type="text"
            id="cep"
            placeholder="CEP"
            className="form-control"
            {...register("endereco.cep", { required: true, maxLength: 8 })}
          />
          {errors.endereco?.cep && (
            <small className="text-danger">O CEP é inválido!</small>
          )}
        </div>
        <div>
          <label htmlFor="rua"></label>
          <input
            type="text"
            id="rua"
            placeholder="Rua"
            className="form-control"
            {...register("endereco.rua", { required: true })}
          />
          {errors.endereco?.rua && (
            <small className="text-danger">A rua é inválida!</small>
          )}
        </div>
        <div>
          <label htmlFor="numero"></label>
          <input
            type="text"
            id="numero"
            placeholder="Número"
            className="form-control"
            {...register("endereco.numero", { required: true })}
          />
          {errors.endereco?.numero && (
            <small className="text-danger">O número é inválido!</small>
          )}
        </div>
        <Button className="mt-3 mb-3" type="submit">
          Cadastrar
        </Button>
      </form>
    </main>
  )
}

export default NovoAluno
