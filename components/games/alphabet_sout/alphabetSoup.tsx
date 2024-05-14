import { useDisclosure } from '@nextui-org/react'
import AlphabetSoupGame from './components/alphabetSoupGame'
import AlphabetSoupButton from './components/alphabetSoupButton'

export default function AlphabetSoup () {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  return (
    <>
      <AlphabetSoupButton onOpen={onOpen} />
      <AlphabetSoupGame isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  )
}
