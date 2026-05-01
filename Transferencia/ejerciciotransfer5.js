export const clasificarPublicaciones = async () => {
    const respuesta = await fetch('./data.json');
    const { posts, comments } = await respuesta.json();

    return posts.map(post => {
        const misComentarios = comments.filter(c => c.postId === post.id);
        return {
            titulo: post.title,
            numeroComentarios: misComentarios.length,
            estado: misComentarios.length > 0 ? "Con comentarios" : "Sin comentarios"
        };
    });
};