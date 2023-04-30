import "./ListaOpciones.css"

const ListaOpciones = () => {
    //metodo map -> 
    const equipos = [
        "Programación",
        "Front-end",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestión"
    ]

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select>
            
            {equipos.map((equipo,index)=>{
                return <option key={index}>{equipo}</option>
            })}
        </select>
    </div>
}
export default ListaOpciones

// otra forma de menos codigo linea 19,20
// {equipos.map((equipo,index)=> <option key={index}>{equipo}</option>)}