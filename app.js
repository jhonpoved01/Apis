// ****************** APROPIACION *******************
//ejercicio 1
// --- IMPORTACIONES ---
import * as Ej1 from './ejercicio#1apropiacion.js'; // Línea 1: Importación Ejercicio 1


// --- BLOQUE DE EJECUCIÓN ---
const ejecutarApp = async () => {
    console.log("======== EJERCICIO 1: SOLICITUDES GET ========");

    // 1. Lista completa de usuarios
    const listaUsuarios = await Ej1.obtenerUsuarios();
    console.log("Lista de Usuarios:", listaUsuarios);

    // 2. Usuario específico (ejemplo con ID 2)
    const usuarioIndividual = await Ej1.obtenerUsuarioPorId(2);
    console.log("Usuario con ID 2:", usuarioIndividual);

    // 3. Posts de un usuario (ejemplo con ID 1)
    const postsUsuario = await Ej1.obtenerPostsPorUsuario(1);
    console.log("Posts del Usuario 1:", postsUsuario);
};

ejecutarApp();























// --- IMPORt de ejercicio 2
import * as Ej2 from './ejercicio2.js'; 

// --- BLOQUE DE EJECUCIÓN ---
const ejecutarApp = async () => {
    // ... Código del Ejercicio 1 que ya tenías ...

    console.log("\n======== EJERCICIO 2: CREACIÓN (POST) ========");

    // 4. Crear publicación
    const postCreado = await Ej2.crearPost({
        userId: 3,
        title: "Aprendiendo Fetch",
        body: "Las solicitudes POST son para enviar datos."
    });
    console.log("Post Creado:", postCreado);

    // 5. Crear comentario
    const comentarioCreado = await Ej2.crearComentario({
        postId: 1,
        name: "Estudiante JS",
        body: "Excelente explicación de los métodos."
    });
    console.log("Comentario Creado:", comentarioCreado);
};

ejecutarApp();


























import * as Ej3 from './ejercicio3.js'; 

// Bloque de ejecución dentro de ejecutarApp():
console.log("\n======== EJERCICIO 3: ACTUALIZACIÓN (PUT/PATCH) ========");
console.log(await Ej3.actualizarPostTotal(1, { title: "Nuevo Título", body: "Nuevo Cuerpo", userId: 1 }));
console.log(await Ej3.actualizarPostParcial(1, { title: "Título solo editado" }));

// ***************************** TRANSFERENCIA ***************************






























//ejercicio 1
import * as Ej4 from './ejerciciotrans1.js'; 

// Bloque de ejecución dentro de ejecutarApp():
console.log("\n======== EJERCICIO 4: ANÁLISIS DE USUARIOS ========");
console.table(await Ej4.analizarUsuariosPosts());







