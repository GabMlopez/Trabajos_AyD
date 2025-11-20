import { useState, useEffect } from 'react';
import { EstudianteService } from '../logica_negocio/EstudianteServicio'
import './App.css';
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
  let status = (formulario_abierto? "container m-auto py-4 py-8 w-fit" : "hidden");
  
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
      <h1 className=' font-bold text-3xl text-center'>Estudiantes</h1>
      <div className='container m-auto'>
        <div className='grid grid-cols-3 justify-items-between gap-1 m-auto w-fit py-3'>
          <button className='rounded-full mx-3 bg-blue-500 text-white' onClick={abrirFormulario}>
          Agregar Alumno
        </button>
        <button className='rounded-full mx-3 bg-blue-500 text-white' onClick={abrirFormulario}>
          Editar Alumno
        </button>
        <button className='rounded-full mx-3 bg-blue-500 text-white' onClick={abrirFormulario}>
          Eliminar Alumno
        </button>
        </div>
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
        <div className='justify-items-center m-auto w-fit my-3 py-2 gap-2'>
          <button className='mx-1 border border-white hover:bg-blue-950' onClick={agregarEstudiante}>Guardar</button>
          <button className='mx-1 border border-white hover:bg-red-950 hover:border-red-500' onClick={cerrarFormulario}>Cancelar</button>
        </div>
      </div>
      <div className='container m-auto w-full items-center justify-center mt-4'>
        <table border={1} className='table-auto m-auto border-gray-100 border-2'>
          <tbody> 
            <tr className='bg-gray-800 text-white'>
            <th className='border-gray-100 border p-4'>
              Id
            </th>
            <th className='border-gray-100 border p-4'>
              Nombre
            </th>
            <th className='border-gray-100 border p-4'>
              Edad
            </th>
          </tr>
            {
            estudiantes.map((estudiante) => (
              <tr key={estudiante.id} className="text-center">
                <td className='border-gray-100 border p-4'>{estudiante.id}</td>
                <td className='border-gray-100 border p-4'>{estudiante.nombre}</td>
                <td className='border-gray-100 border p-4'>{estudiante.edad}</td>
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
