'use client'
import PhotoWord from './games/photo_word/photoWord'
import Questions from './games/questions/questions'
import AlphabetSoup from './games/alphabet_sout/alphabetSoup'
import GameButton from './GameButton'
import { fontPoetsenOne } from '@/config/fonts'
import clsx from 'clsx'
import { LightbulbIcon } from './icons'

export default function GamesGrip () {
  return (
    <section className='grid grid-cols-2 grid-rows-3 w-[35vw] h-[60vh] gap-3'>
      <section className='w-full h-full animate-fade-right animate-duration-[2000ms]'>
        <Questions />
      </section>

      <section className='w-full h-full row-span-2 animate-fade-down animate-duration-[2000ms]'>
        <AlphabetSoup />
      </section>

      <section className='w-full h-full animate-fade-up row-span-2 animate-duration-[2000ms]'>
        <PhotoWord />
      </section>

      <GameButton color='bg-gradient-to-tr from-indigo-500 to-blue-600 ' href='/games/lieortruth' animate='animate-fade-left'>
        <LightbulbIcon className='svg' />
        <h1 className={clsx(
          'text-lg font-medium textShadow',
          fontPoetsenOne.className
        )}
        >Dos <span className='text-red-500'>mentiras</span>  y una <span className='text-green-500'>verdad</span>
        </h1>
      </GameButton>
    </section>
  )
}
