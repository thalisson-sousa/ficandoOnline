import api from "../api"

export async function pegarRepositoriosUsuario(id) {
    try {
        const resultado = await api.get(`/repos?postId=${id}`);
        return resultado.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function salvarRepositoriosUsuario(postId, nome, data, id) {
    try {
        await api.put(`/repos/${id}`, {
            name: nome,
            data: data,
            postId: postId,
            id: id
        });
        return "Sucesso";
    } catch (error) {
        console.log(error);
        return "Erro";
    }
}

export async function criarRepositoriosUsuario(postId, nome, data) {
    try {
        await api.post(`/repos`, {
            name: nome,
            data: data,
            postId: postId
        });
        return "Sucesso";
    } catch (error) {
        console.log(error);
        return "Erro";
    }
}

export async function deletarRepositoriosUsuario(id) {
    try {
        await api.delete(`/repos/${id}`);
        return "Sucesso";
    } catch (error) {
        console.log(error);
        return "Erro";
    }
}