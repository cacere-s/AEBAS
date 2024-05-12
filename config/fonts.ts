import { Fira_Code as FontMono, Inter as FontSans, Poiret_One } from 'next/font/google'
import Poetsen_One from 'next/font/local'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono'
})

export const fontPoiretOne = Poiret_One({
  subsets: ['latin'],
  weight: '400'
})

export const fontPoetsenOne = Poetsen_One({ src: './fonts/PoetsenOne-Regular.ttf' })
