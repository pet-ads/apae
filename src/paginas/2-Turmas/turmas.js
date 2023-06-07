import "./turmas.css"
import TurmasAnteriores from "./TurmasAnteriores.js"

export default function Turmas(){
    return(
        <section className="turmas-container">
            <p className="titulo-turmas">Turmas</p>
            <TurmasAnteriores/>
        </section>
    )
}