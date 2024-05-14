import { PreguntasIcon } from '@/components/icons'
import { fontPoetsenOne, fontPoiretOne } from '@/config/fonts'
import { Button } from '@nextui-org/button'
import clsx from 'clsx'

export default function QuestionsButton ({ onOpen }: { onOpen: () => void }) {
  return (
    <Button
      onPress={onOpen} className={clsx(
        'w-full h-full rounded-2xl p-2 flex flex-col justify-between cursor-pointer text-start items-start',
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
    </Button>
  )
}
