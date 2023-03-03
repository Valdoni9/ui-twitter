import { PaperPlaneRight } from 'phosphor-react'
import { FormEvent, KeyboardEvent,useState } from 'react'
import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Tweet } from '../components/Tweet'

import './Status.css'



/*
* Fluxo de renderizaçåo:
*
* 1. Toda vez que alteramos o estado de um componente, TODO componente é recalculado.
* 2. Toda vez que o seu componente PAI renderizar.
* 3. Toda vez que alguma das suas propriedades mudarem.
**/

/*
* Algoritmo de reconciliaçåo:
*
* 1. Criar em memória a nova versåo do HTML do componente
* 2. Compara essa nova versåo com a versåo anterior do HTML (Diff)
* 3. Aplicar as operações JavaScript para alterar somente o necessário no HTML
*/


export function Status(){
  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswers] = useState([
    'Concordo...',
    'Olha, faz sentido',
    'Parabëns pelo progresso.'
  ])

function createNewAnswer(event: FormEvent){
  event.preventDefault()

  setAnswers([newAnswer, ...answers])
  setNewAnswer('')
  
}

function handleHotkeySubmit(event: KeyboardEvent){
  if (event.key === 'Enter' && (event.ctrlKey || event.metaKey))
  {
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
  }
}


  return(
    <main className="Status">
        <Header title="Tweet"/>

          <Tweet content="
Lorem ipsum dolor, sit amet consectetur adipisicing elit. C
ulpa doloremque odio rerum exercitationem sit nostrum nemo earum fugit
 similique vel corrupti blanditiis omnis porro, repellat, ad sequi accusantium! Enim, numquam!"/>

        <Separator />

        <form onSubmit={createNewAnswer} className="answer-tweet-form">
          <label htmlFor="tweet">
            <img src="https://github.com/valdoni9.png" alt="Valdoni" />
            <textarea 
            id="tweet" 
            placeholder="Tweet your answer?"
            value={newAnswer}
            onKeyDown={handleHotkeySubmit}
            onChange={(event)=>{setNewAnswer(event.target.value)}}
            />
          </label>

          <button type="submit">
            <PaperPlaneRight/>
            <span>
              Answer
            </span>
            </button>
        </form>

        {answers.map(answer =>{
          return <Tweet key={answer} content={answer}/>
        })}
</main>
  )
}