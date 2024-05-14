'use client'
import PhotoWord from './games/photo_word/photoWord'
import Questions from './games/questions/questions'
import AlphabetSoup from './games/alphabet_sout/alphabetSoup'
import LieOrTrut from './games/lie_or_truth/lieOrTruth'

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

      <section className='w-full h-full animate-fade-left animate-duration-[2000ms]'>
        <LieOrTrut />
      </section>
    </section>
  )
}
