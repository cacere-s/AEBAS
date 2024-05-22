import { LieOrTruth } from '@/types'

export const lieOrTruthFetch = async () => {
  try {
    const data = await fetch('http://localhost:8080/api/v1/lietruth')
    const dataDB = await data.json()
    shuffle(dataDB)
    return dataDB
  } catch (error) {
    console.log('error fetching', error)
  }
}

function shuffle (array: LieOrTruth[]) {
  array.sort(() => Math.random() - 0.5)
}
