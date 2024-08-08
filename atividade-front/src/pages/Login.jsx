import { Button } from "react-bootstrap"
import { useForm } from "react-hook-form"
// import toast from "react-hot-toast"
// import { Link, useNavigate } from "react-router-dom"

function Login() {
  const {
    register,
    // handleSubmit,
    formState: { errors },
  } = useForm()

  // const navigate = useNavigate()

  return (
    <main>
      <form className="form-section mt-5">
        <h1>Login</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            {...register("email", { required: "O email é obrigatório" })}
          />
          {errors.email && (
            <small className="invalid">{errors.email.message}</small>
          )}
        </div>
        <div>
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            className="form-control"
            {...register("senha", {
              required: "A senha é obrigatória",
              minLength: { value: 6, message: "Mínimo de 6 caracteres" },
            })}
          />
          {errors.senha && (
            <small className="invalid">{errors.senha.message}</small>
          )}
        </div>
        <Button variant="dark" className="mt-2 mb-2 w-100" type="submit">
          Entrar
        </Button>
        <Button
          variant="primary"
          className="mb-3 w-100"
          type="button"
        >
          Entrar com o google
        </Button>
      </form>
    </main>
  )
}

export default Login
