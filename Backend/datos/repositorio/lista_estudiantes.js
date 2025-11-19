import estudiantes from "../datos/estudiantes.js";

class Lista_Estudiantes {

    constructor() {
        this.estudiantes = []; 
    }

    agregar(estudiante) {
        if (estudiante instanceof Estudiante) {
            this.estudiantes.push(estudiante);
        } else {
            console.error("Solo se pueden agregar objetos de tipo Estudiante");
        }
    }

    
}
