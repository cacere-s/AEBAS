import { subtitle, title } from '@/components/primitives'
import { World } from '@/components/world'
import '@/styles/home.css'
import GamesGrip from '@/components/gamesGrip'

export default function Home () {
  return (
    <section className='flex flex-row items-center justify-between gap-4 '>
      <article className='flex flex-col w-[50vw] h-[75vh]'>
        <header className='px-4 mb-4 w-[35rem] animate-fade-up animate-duration-[2000ms]'>
          <h1 className={title({ size: 'sm' })}>Hey, Bienvenido&nbsp;</h1>
          <h1 className={title({ color: 'blue', size: 'sm' })}>AEBAS</h1>
          <h3 className={subtitle({ class: 'mt-4' })}>
            Una plataforma que te apoyara en el
            <span className='text-[#b249f8]'> aprendizaje </span> en el area de
            <span className='text-[#0072F5]'> sociales</span> con desafios
            <span className='text-[#FF705B]'> dinamicos.</span>
          </h3>
        </header>
        <World />
      </article>
      <article>
        <GamesGrip />
      </article>
    </section>
  )
}
