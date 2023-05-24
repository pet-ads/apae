import "./turmas.css"
import TurmasAnteriores from "./TurmasAnteriores.js"

export default function Turmas(){
    return(
        <section className="turmas-container">
            <h1>Turmas</h1>
            <TurmasAnteriores/>
        </section>
    )
}