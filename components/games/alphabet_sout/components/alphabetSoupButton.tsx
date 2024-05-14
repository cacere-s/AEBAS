import { SopaLetrasIcon } from '@/components/icons'
import { fontPoetsenOne } from '@/config/fonts'
import { Button } from '@nextui-org/button'
import clsx from 'clsx'

export default function AlphabetSoupButton ({ onOpen }: { onOpen: () => void }) {
  return (
    <Button
      onPress={onOpen} className={clsx(
        'w-full h-full rounded-2xl p-4 flex flex-col justify-around items-center text-center cursor-pointer',
        'bg-gradient-to-bl from-neutral-900 to-zinc-900',
        'transition ease-in-out hover:scale-105 duration-300'
      )}
    >
      <h1 className={clsx(
        'text-lg font-medium textShadow',
        fontPoetsenOne.className
      )}
      >Sopa de Letras
      </h1>
      <section>
        <SopaLetrasIcon size={200} />
      </section>
    </Button>
  )
}
