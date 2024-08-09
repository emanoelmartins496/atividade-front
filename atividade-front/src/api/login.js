import axios from "axios";

export async function login(credentials) {

  try {
    const response = await axios.post("http://localhost:3000/login", credentials);
    const { token } = response.data;

    // Armazena o token JWT no sessionStorage
    sessionStorage.setItem("token", token);

    return response.data;
  } catch (error) {
    throw new Error("Erro ao autenticar o usuário");
  }
}
