import { FotosyPalabraIcon, LightbulbIcon, PreguntasIcon, SopaLetrasIcon } from '@/components/icons'
import { subtitle, title } from '@/components/primitives'
import { World } from '@/components/world'
import clsx from 'clsx'
import '@/styles/home.css'
import { fontPoetsenOne, fontPoiretOne } from '@/config/fonts'

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
        <section className='grid grid-cols-2 grid-rows-3 w-[35vw] h-[60vh] gap-3'>
          <section className='w-full h-full animate-fade-right animate-duration-[2000ms]'>

            <div className={clsx(
              'w-full h-full rounded-2xl p-2 flex flex-col justify-between cursor-pointer',
              'bg-gradient-to-r from-violet-500 to-fuchsia-500',
              'transition ease-in-out hover:scale-105 duration-300'
            )}
            >
              <PreguntasIcon className='svg' />

              <article className='textShadow'>
                <h1 className={clsx(
                  'text-lg font-medium',
                  fontPoetsenOne.className
                )}
                >Preguntados
                </h1>
                <p className={clsx(
                  'text-md',
                  fontPoiretOne.className
                )}
                >Responde y acumula puntos
                </p>
              </article>
            </div>
          </section>

          <section className='w-full h-full row-span-2 animate-fade-down animate-duration-[2000ms]'>
            <div className={clsx(
              'w-full h-full rounded-2xl p-4 flex flex-col justify-around items-center text-center cursor-pointer',
              'bg-gradient-to-bl from-neutral-900 to-zinc-900',
              'transition ease-in-out hover:scale-105 duration-300'
            )}
            >
              <h1 className={clsx(
                'text-lg font-medium textShadow',
                fontPoetsenOne.className
              )}
              >Sopa de Letra
              </h1>
              <SopaLetrasIcon size={200} />
            </div>
          </section>

          <section className='w-full h-full animate-fade-up row-span-2 animate-duration-[2000ms]'>
            <div className={clsx(
              'w-full h-full rounded-2xl p-4 flex flex-col justify-around items-center text-center cursor-pointer',
              'bg-gradient-to-tl from-rose-500 to-orange-500',
              'transition ease-in-out hover:scale-105 duration-300'
            )}
            >
              <h1 className={clsx(
                'text-lg font-medium textShadow',
                fontPoetsenOne.className
              )}
              >4 Fotos y 1 Palabra
              </h1>
              <FotosyPalabraIcon size={180} />
            </div>
          </section>

          <section className='w-full h-full animate-fade-left animate-duration-[2000ms]'>
            <div className={clsx(
              'w-full h-full rounded-2xl p-2 py-4 flex flex-col justify-between cursor-pointer',
              'bg-gradient-to-tr from-indigo-500 to-blue-600 ',
              'transition ease-in-out hover:scale-105 duration-300'
            )}
            >
              <LightbulbIcon className='svg' />
              <h1 className={clsx(
                'text-lg font-medium textShadow',
                fontPoetsenOne.className
              )}
              >Dos <span className='text-red-500'>mentiras</span>  y una <span className='text-green-500'>verdad</span>
              </h1>

            </div>
          </section>
        </section>
      </article>
    </section>
  )
}
