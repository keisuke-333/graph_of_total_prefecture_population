import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import type { PrefecturesData } from '@/types'

export const usePrefectures = () => {
  const getPrefectures = async () => {
    const { data } = await axios.get<PrefecturesData>(
      'https://opendata.resas-portal.go.jp/api/v1/prefectures',
      {
        headers: { 'X-API-KEY': process.env.NEXT_PUBLIC_RESAS_API_KEY },
      },
    )
    return data
  }
  return useQuery<PrefecturesData>(['prefectures'], getPrefectures)
}
