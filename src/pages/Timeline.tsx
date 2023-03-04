import { FormEvent, KeyboardEvent, useState } from 'react'
import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Tweet } from '../components/Tweet'

import './Timeline.css'

//SPA - Evitar redirecionamento

let newTweet = ''

export function Timeline(){
  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState([
    'Meu primeiro tweet',
    'Primeiro Projeto React com TypeScript!!!!!',
    'Deu certo tweetar!',
    'RockSeat é top!!!'
  ])

function createNewTweet(event: FormEvent){
  event.preventDefault()

  setTweets([newTweet, ...tweets])
  setNewTweet('')
  
}

function handleHotkeySubmit(event: KeyboardEvent){
  if (event.key === 'Enter' && (event.ctrlKey || event.metaKey))
  {
      setTweets([newTweet, ...tweets])
      setNewTweet('')
  }
}


  return (
<main className="timeline">
        <Header title="Home"/>
        
        <form onSubmit={createNewTweet} className="new-tweet-form">
          <label htmlFor="tweet">
            <img src="https://github.com/valdoni9.png" alt="Valdoni" />
            <textarea 
            id="tweet" 
            placeholder="I am from?"
            value={newTweet}
            onKeyDown={handleHotkeySubmit}
            onChange={(event) => {
              setNewTweet(event.target.value)
            }}/>

          </label>

          <button type="submit">Tweet</button>
        </form>

        <Separator />

        {tweets.map(tweet =>{
          return <Tweet key={tweet} content={tweet}/>
        })}
</main>

  )
}