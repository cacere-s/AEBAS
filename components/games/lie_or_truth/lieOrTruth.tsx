import { useDisclosure } from '@nextui-org/react'
import LieOrTruthButton from './components/lieOrTruthButton'
import LieOrTruthGame from './components/lieOrTruthGame'

export default function LieOrTrut () {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  return (
    <>
      <LieOrTruthButton onOpen={onOpen} />
      <LieOrTruthGame isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  )
}
