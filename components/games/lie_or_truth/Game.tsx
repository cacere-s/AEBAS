'use client'
import { LieOrTruth } from '@/types'
import { Button } from '@nextui-org/button'
import { useState } from 'react'

export default function LieOrTruthGame ({ game }: { game: LieOrTruth[] }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [punctuation, setPunctuation] = useState(0)
  const [finished, setFinished] = useState(false)

  const handleAnswerSubmit = (option: string, e: any) => {
    if (option === game[currentQuestion].correct.option) setPunctuation(currentQuestion + 1)
    e.target.classList.add(option === game[currentQuestion].correct.option ? 'bg-green-600' : 'bg-red-600')

    setTimeout(() => {
      if (currentQuestion === game.length - 1) {
        setFinished(true)
      } else {
        setCurrentQuestion(currentQuestion + 1)
      }
    }, 1500)
  }

  if (finished) {
    return (
      <>
        <div className='text-center content-center p-4 w-3/4 h-[400px] border-2 border-neutral-300'>
          <header className='flex justify-center mb-4 px-4'>
            <h1 className='text-2xl font-semibold'>
              Has acabado todas las preguntas
            </h1>

          </header>
          <main>
            <h2 className='text-xl font-medium'>Tu puntuacion final</h2>
            <h3 className='text-xl'>{punctuation}/6</h3>
          </main>
          <Button size='lg' color='primary' onClick={() => { window.location.href = '/games/lieortruth' }}>Volver a Jugar</Button>

        </div>
      </>
    )
  }

  return (
    <>
      <div className='text-center p-4 w-3/4 h-[400px] content-between border-2 border-neutral-300'>
        <header className='flex justify-between px-4'>
          <h1 className='text-lg font-medium'>
            Time: 10
          </h1>
          <h1 className='text-lg font-medium'>
            {currentQuestion + 1}/6
          </h1>

        </header>
        <main className='h-5/6 content-end'>
          <h2 className='text-2xl font-semibold tracking-wider my-6 text-balance'>
            {game[currentQuestion].ask}
          </h2>
          {
          game[currentQuestion].options.map((item) => (
            <Button
              key={`${item.option}-${item.answer}`} size='lg'
              onClick={(e) => handleAnswerSubmit(item.option, e)}
              color='primary'
              className='w-11/12 text-balance m-2'
            >

              {item.answer}

            </Button>
          ))
        }
        </main>
      </div>
    </>
  )
}
