import { SVGProps } from 'react'

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number
}

export enum Request {
  NULL,
  TRUE,
  FALSE
}

export interface LieOrTruth {
  _id: Id
  ask: string
  options: Option[]
  correct: Correct
}

export interface Id {
  $oid: string
}

export interface Option {
  answer: string
  option: string
}

export interface Correct {
  option: string
  result: string
}
