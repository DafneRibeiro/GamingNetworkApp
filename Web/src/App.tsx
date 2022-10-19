import { GameBanner } from './components/GameBanner';
import { useState, useEffect } from 'react';
import './styles/main.css';
import logoImg from './assets/Logo.svg'
import { CreateAdBanner } from './components/CreateAdBanner';


interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }

}


function App() {
  const [games, setGames] = useState<Game[]>([])


  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then(response => response.json())
      .then(data => {
        setGames(data)
      })
  }, []) // leaving this blank means that it will execute only once.

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt="" />
      <h1 className="text-6xl text-white font-black">
        Your  <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span>  is here!
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        {games.map(game => {
          return (
            <GameBanner
              key={game.id}
              title={game.title}
              bannerUrl={game.bannerUrl}
              adsCount={game._count.ads} />
          )
        })}
      </div>

      <CreateAdBanner />
    </div>
  )
}

export default App
