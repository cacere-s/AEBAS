import { useDisclosure } from '@nextui-org/react'
import QuestionsGame from './components/questionsGame'
import QuestionsButton from './components/questionsButton'

export default function Questions () {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  return (
    <>
      <QuestionsButton onOpen={onOpen} />
      <QuestionsGame isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  )
}
