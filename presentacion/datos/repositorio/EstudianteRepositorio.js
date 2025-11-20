import { Estudiante } from "../modelo/Estudiante";

export class Lista_Estudiantes {
  constructor() {
    this.estudiantes = [];
    this.siguienteId = 1;
  }

  agregar(estudiante) {
    estudiante.id = this.siguienteId;
    this.estudiantes.push(estudiante);
    console.log("Estudiante agregado");
    console.log(estudiante.id);
    console.log(estudiante.nombre);
    console.log(estudiante.edad);
    this.siguienteId++;
  }
  obtener_todos() { return [...this.estudiantes]; }
  buscar_por_id(id) { 
    return this.estudiantes.find(e => e.id === id); 
}
  eliminar_por_id(id) {
    const index = this.estudiantes.findIndex(e => e.id === id);
    if (index !== -1) {
      this.estudiantes.splice(index, 1);
      return true; 
    }
    return false; 
  }

  modificar_por_id(id, nombre, edad){
    const estudiante = this.buscar_por_id(id);
    estudiante.setNombre(nombre);
    estudiante.setEdad(edad);
  }
}

