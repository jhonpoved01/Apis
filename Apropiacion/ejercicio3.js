// Solicitud 6: PUT - Actualización completa
export const actualizarPostTotal = async (id, datosActualizados) => {
    return {
        id,
        ...datosActualizados,
        metodo: "PUT",
        mensaje: "Recurso actualizado totalmente"
    };
};

// Solicitud 7: PATCH - Modificación parcial
export const actualizarPostParcial = async (id, campoEditado) => {
    return {
        id,
        ...campoEditado,
        metodo: "PATCH",
        mensaje: "Campo modificado con éxito"
    };
};