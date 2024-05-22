import LieOrTruthGame from '@/components/games/lie_or_truth/Game'
import { title } from '@/components/primitives'
import { lieOrTruthFetch } from '@/lib/lieOrTruth'

export default async function LieOrTruth () {
  const game = await lieOrTruthFetch()
  return (

    <section>
      <header className='px-4 mb-8 animate-fade-up animate-duration-[2000ms]'>
        <h1 className={title({ size: 'sm' })}>Dos&nbsp;</h1>
        <h1 className={title({ size: 'sm', color: 'pink' })}>mentiras&nbsp;</h1>
        <h1 className={title({ size: 'sm' })}>y una&nbsp;</h1>
        <h1 className={title({ color: 'green', size: 'sm' })}>Verdad</h1>

      </header>
      <main className='flex justify-center'>
        <LieOrTruthGame game={game} />
      </main>
    </section>
  )
}
