import axios from "axios";

// Função para autenticar o usuário e obter o token JWT
export async function login(credentials) {
  try {
    const response = await axios.post("http://localhost:3000/login", credentials);
    const { token } = response.data;

    // Armazena o token JWT no sessionStorage ou localStorage
    sessionStorage.setItem("token", token); // ou localStorage.setItem("token", token);

    return response.data;
  } catch (error) {
    throw new Error("Erro ao autenticar o usuário");
  }
}

// Função para fazer logout e remover o token
export function logout() {
  sessionStorage.removeItem("token"); // ou localStorage.removeItem("token");
}

// Função para verificar se o usuário está autenticado
export function isAuthenticated() {
  const token = sessionStorage.getItem("token"); // ou localStorage.getItem("token");
  return !!token;
}
