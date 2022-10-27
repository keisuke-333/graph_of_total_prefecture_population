import axios from 'axios'
import { useState } from 'react'

import type { Population, PopulationData } from '@/types'

export const usePopulation = () => {
  const [population, setPopulation] = useState<Population[]>([])

  const getPopulation = async (prefName: string, prefCode: number, check: boolean) => {
    let c_population = population.slice()
    if (check) {
      if (c_population.findIndex((value) => value.prefName === prefName) !== -1) {
        return
      }
      const { data } = await axios.get<PopulationData>(
        `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${String(
          prefCode,
        )}`,
        {
          headers: { 'X-API-KEY': process.env.NEXT_PUBLIC_RESAS_API_KEY },
        },
      )
      c_population.push({
        prefName: prefName,
        data: data.result.data[0].data,
      })
      setPopulation(c_population)
    } else {
      const deleteIndex = c_population.findIndex((value) => value.prefName === prefName)
      if (deleteIndex === -1) return
      c_population.splice(deleteIndex, 1)
      setPopulation(c_population)
    }
  }

  return { getPopulation, population }
}
