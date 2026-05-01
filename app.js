// ****************** APROPIACION *******************























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




// ***************************** TRANSFERENCIA ***************************






































