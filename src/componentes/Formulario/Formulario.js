import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = () => {
    const manejarEnvio = (evento) => {
        //hace que no recargue la pagina al dar click en el boton
        evento.preventDefault()
        return
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingrese nombre"/>
            <CampoTexto titulo="Puesto" placeholder="Ingrese puesto"/>
            <CampoTexto titulo="Foto" placeholder="Ingrese enlace de foto"/>
            <ListaOpciones/>
            <Boton texto="Crear"/>
        </form>
    </section>
}

export default Formulario