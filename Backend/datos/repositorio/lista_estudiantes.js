import estudiantes from "../datos/estudiantes.js";

class Lista_Estudiantes {
  constructor() {
    this.estudiantes = [];
    this.siguienteId = 1;
  }

  agregar(estudiante) {
    estudiante.id = this.siguienteId++;
    this.estudiantes.push(estudiante);
    return estudiante;
  }

  obtener_todos() { return [...this.estudiantes]; }
  buscar_por_id(id) { return this.estudiantes.find(e => e.id === id); }
  eliminar_por_id(id) {
    const index = this.estudiantes.findIndex(e => e.id === id);
    if (index !== -1) {
      this.estudiantes.splice(index, 1);
      return true;
    }
    return false;
  }

    
}
