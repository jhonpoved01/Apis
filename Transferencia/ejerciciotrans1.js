export const analizarUsuariosPosts = async () => {
    const respuesta = await fetch('./data.json');
    const { users, posts } = await respuesta.json();

    return users.map(user => {
        const misPosts = posts.filter(p => p.userId === user.id);
        return {
            nombre: user.name,
            cantidadPublicaciones: misPosts.length,
            tienePublicaciones: misPosts.length > 0
        };
    });
};