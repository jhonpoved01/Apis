// Solicitud 4: Crear una nueva publicación
export const crearPost = async (nuevaPublicacion) => {
    // Simulamos la respuesta de una API
    return {
        ...nuevaPublicacion,
        id: Math.floor(Math.random() * 1000), // ID generado aleatoriamente
        status: "201 Created",
        mensaje: "Publicación creada con éxito"
    };
};

// Solicitud 5: Registrar un nuevo comentario
export const crearComentario = async (nuevoComentario) => {
    return {
        ...nuevoComentario,
        id: Math.floor(Math.random() * 1000),
        status: "201 Created",
        mensaje: "Comentario registrado correctamente"
    };
};