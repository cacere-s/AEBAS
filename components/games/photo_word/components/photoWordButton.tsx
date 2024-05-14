import { FotosyPalabraIcon } from '@/components/icons'
import { fontPoetsenOne } from '@/config/fonts'
import { Button } from '@nextui-org/button'
import clsx from 'clsx'

export default function PhotoWordButton ({ onOpen }: { onOpen: () => void }) {
  return (
    <Button
      onPress={onOpen} className={clsx(
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
      <section>
        <FotosyPalabraIcon size={180} />
      </section>
    </Button>
  )
}
