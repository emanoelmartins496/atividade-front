import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import logo from "../../public/img/logo.png";
import { login } from "../api/login";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate(); 

  const onSubmit = async (data) => {
    try {
      await login(data); 
      toast.success("Login realizado com sucesso!"); 
      navigate("/alunos/cursos"); 
    } catch (error) {
      toast.error("Falha no login. Verifique suas credenciais."); 
    }
  };

  return (
    <main>
      <form className="form-section" onSubmit={handleSubmit(onSubmit)}>
        <img src={logo} alt="Logo" />
        <h3>Seja bem vindo (a)!</h3>
        <p>Use seu e-mail e senha para ter acesso às aulas.</p>
        <div>
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            placeholder="E-mail"
            className="form-control"
            {...register("email", { required: "O email é obrigatório" })}
          />
          {errors.email && (
            <small className="invalid">{errors.email.message}</small>
          )}
        </div>
        <div>
          <label htmlFor="senha" className="mt-4"></label>
          <input
            type="password"
            id="senha"
            placeholder="Senha"
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
        <Button variant="primary" className="mb-3 w-100" type="button">
          Entrar com o Google
        </Button>
      </form>
    </main>
  );
}

export default Login;
