import { useState, useEffect } from 'react'
import { EstudianteService } from '../logica_negocio/EstudianteServicio'
import './App.css'
const controlador=new EstudianteService();
function App() {
  const [estudiantes, setEstudiantes] = useState([]);
  const [nombre_es,setNombre]=useState("");
  const [edad_es,setEdad]=useState(0);
  const [formulario_abierto,setFormularioAbierto]=useState(false);
  const abrirFormulario = () => {setFormularioAbierto(true)};
  const cerrarFormulario = () => {
    setFormularioAbierto(false);
    setNombre("");
    setEdad(0);
  };
  let status = (formulario_abierto? "container" : "hidden");
  
  const obtenerEstudiantes = () =>{
    setEstudiantes(controlador.listar());
  }

  const agregarEstudiante = () =>{
    controlador.registrar(nombre_es,edad_es);
    setNombre("");
    setEdad(0);
    cerrarFormulario();
    obtenerEstudiantes();
  }

  
  useEffect(() => {
        obtenerEstudiantes;
    }, []);
  return (
    <>
      <h1>Estudiantes</h1>
      <div className='container'>
        <button className='rounded-full bg-blue-500 text-white' onClick={abrirFormulario}>
          Agregar Alumno
        </button>
      </div>
      <div className={status}>
        <h2 className='text-center'></h2>
        <div className=' columns-2 gap-4'>
          <div>
            <label>Nombre:</label>
            <input type='text' className=' border-2' value={nombre_es} onChange={(e)=>{setNombre(e.target.value)}}/>
          </div>
          <div>
            <label>Edad:</label>
            <input type='number' className=' border-2' value={edad_es} onChange={(e)=>{setEdad(e.target.value)}}/>
          </div>
        </div>
        <div>
          <button onClick={agregarEstudiante}>Guardar</button>
          <button onClick={cerrarFormulario}>Cancelar</button>
        </div>
      </div>
      <div>
        <table border={1}>
          <tbody> 
            <tr>
            <th>
              Id
            </th>
            <th>
              Nombre
            </th>
            <th>
              Edad
            </th>
          </tr>
            {
            estudiantes.map((estudiante) => (
              <tr key={estudiante.id}>
                <td>{estudiante.id}</td>
                <td>{estudiante.nombre}</td>
                <td>{estudiante.edad}</td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
