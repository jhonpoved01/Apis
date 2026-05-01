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




























// ***************************** TRANSFERENCIA ***************************






































