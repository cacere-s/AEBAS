import { Button } from '@nextui-org/button'
import clsx from 'clsx'
import NextLink from 'next/link'

export default function GameButton ({ children, color, href, animate }:
{
  children: React.ReactNode
  color: string
  href: string
  animate: string
}) {
  return (
    <section className={clsx(
      'w-full h-full animate-duration-[2000ms]',
      animate
    )}
    >
      <NextLink href={href}>
        <Button
          className={clsx(
            'w-full h-full rounded-2xl p-2 py-4 flex flex-col justify-between cursor-pointer text-start items-start',
            color,
            'transition ease-in-out hover:scale-105 duration-300'
          )}
        >
          {children}
        </Button>
      </NextLink>
    </section>
  )
}
