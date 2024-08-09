import axios from "axios";

// Instância Axios para chamadas não protegidas
const apiPublic = axios.create({
  baseURL: "http://localhost:3000",
});

// Instância Axios para chamadas protegidas
const apiProtected = axios.create({
  baseURL: "http://localhost:3000",
});

// Adiciona o token JWT ao cabeçalho Authorization
apiProtected.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("token"); // ou localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Funções públicas (sem token)
export async function getAlunos() {
  const response = await apiPublic.get("/alunos");
  return response.data;
}

// Funções protegidas (com token)
export async function getAluno(id) {
  const response = await apiProtected.get(`/alunos/${id}`);
  return response.data;
}

export async function listarCursosDoAluno() {
  try {
    const response = await apiProtected.get('/alunos/cursos');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar cursos do aluno:', error);
    throw error;
  }
}

export async function addAluno(data) {
  const response = await apiProtected.post("/alunos", data);
  return response.data;
}

export async function deleteAluno(id) {
  const response = await apiProtected.delete(`/alunos/${id}`);
  return response.data;
}

export async function updateAluno(id, data) {
  const response = await apiProtected.put(`/alunos/${id}`, data);
  return response.data;
}