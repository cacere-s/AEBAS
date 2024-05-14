import { LightbulbIcon } from '@/components/icons'
import { fontPoetsenOne } from '@/config/fonts'
import { Button } from '@nextui-org/button'
import clsx from 'clsx'

export default function LieOrTruthButton ({ onOpen }: { onOpen: () => void }) {
  return (
    <Button
      onPress={onOpen} className={clsx(
        'w-full h-full rounded-2xl p-2 py-4 flex flex-col justify-between cursor-pointer text-start items-start',
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
    </Button>
  )
}
