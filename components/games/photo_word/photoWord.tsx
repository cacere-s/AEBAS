import { useDisclosure } from '@nextui-org/react'
import PhotoWordGame from './components/photoWordGame'
import PhotoWordButton from './components/photoWordButton'

export default function PhotoWord () {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  return (
    <>
      <PhotoWordButton onOpen={onOpen} />
      <PhotoWordGame isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  )
}
