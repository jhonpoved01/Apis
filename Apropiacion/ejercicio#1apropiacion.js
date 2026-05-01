const obtenerData = async () => {
    const respuesta = await fetch('./data.json');
    return await respuesta.json();
};

// Solicitud 1: Lista completa
export const obtenerUsuarios = async () => {
    const { users } = await obtenerData();
    return users;
};

// Solicitud 2: Usuario por ID
export const obtenerUsuarioPorId = async (id) => {
    const { users } = await obtenerData();
    return users.find(u => u.id === id);
};

// Solicitud 3: Posts de un usuario
export const obtenerPostsPorUsuario = async (userId) => {
    const { posts } = await obtenerData();
    return posts.filter(p => p.userId === userId);
};