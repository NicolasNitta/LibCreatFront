import { NewNote } from "../../components/Notas/NewNote";
import { Note } from "../../components/Notas/Note";
export function Perfil() {

    return (

<div className="mx-auto max-w-6xl my-12 space-y-6 ">

      <div className="h-px bg-slate-700" />

        <div className="grid grid-cols-3 auto-rows-[250px] gap-x-6 gap-y-3">

          <NewNote />
          
          <Note note={{
            date: new Date(2024, 7 ,27),
            content: "Mago Caipira voando no trator mágico ao por do sol"
          }} />
          <Note note={{
            date: new Date(2024, 7 ,21),
            content: "Homem aranha tomando café em cima do prédio olhando para o céu em um dia chuvoso"
          }} />
          <Note note={{
            date: new Date(2024, 6 ,24),
            content: "Cidade cyberpunk misturado com uma temática medieval, muita cor neon roxa e personagens espinhosos, lotados de espeto pelo corpo"
          }} />
          

        </div>

      </div>   
    )
}

export default Perfil;