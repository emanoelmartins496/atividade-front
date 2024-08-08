import axios from "axios";

export async function getCurso() {
    const response = await axios.get("http://localhost:3000/cursos");
    return response.data;
}

export async function addCurso(data) {
    const response = await axios.post("http://localhost:3000/cursos", data);
    return response.data;
}

export async function updateCurso(id, data) {
    const response = await axios.put(`http://localhost:3000/cursos/${id}`, data);
    return response.data;
}

export async function deleteCurso(id) {
    const response = await axios.delete(`http://localhost:3000/cursos/${id}`);
    return response.data;
}
