import {Estudiante} from '../datos/modelo/Estudiante.js';
import {Lista_Estudiantes}  from '../datos/repositorio/EstudianteRepositorio.js';

export class EstudianteService {
    constructor() {
        this.repo = new Lista_Estudiantes();
    }
   registrar(nombre, edad) {
    if (!nombre || nombre.trim().length < 2)
      throw new Error('Nombre inválido');
    if(this.no_tiene_numeros(nombre) === false)
        throw new Error('El nombre no puede contener números');

    if (!edad || isNaN(edad))
        throw new Error('Edad inválida');
    if (edad < 0 || edad > 100)
      throw new Error('Edad fuera de rango');

    const nuevo = new Estudiante(null, nombre.trim(), parseInt(edad));
    this.repo.agregar(nuevo);
  }

  no_tiene_numeros(cadena) {
  return !/\d/.test(cadena);  
    }
  listar() { return this.repo.obtener_todos(); } 

  eliminar(id) { return this.repo.eliminar_por_id(parseInt(id)); } 

  obtener_por_id(id) { return this.repo.buscar_por_id(parseInt(id)); } 
}