import "./ListaOpciones.css"

const ListaOpciones = (props) => {
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

    const manejarCambio=(evento) => {
        props.actualizarEquipo(evento.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>)}
        </select>
    </div>
}
export default ListaOpciones

// otra forma de menos codigo linea 19,20
// {equipos.map((equipo,index)=> <option key={index}>{equipo}</option>)}