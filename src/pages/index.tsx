import type { NextPage } from 'next'

import Graph from '@/components/Graph'
import Layout from '@/components/Layout'
import PrefectureList from '@/components/PrefectureList'
import { usePopulation } from '@/hooks/usePopulation'
import { usePrefectures } from '@/hooks/usePrefectures'

const HomePage: NextPage = () => {
  const { getPopulation, population } = usePopulation()
  const { data } = usePrefectures()

  return (
    <Layout>
      <PrefectureList data={data} onChange={getPopulation} />
      <Graph population={population} />
    </Layout>
  )
}

export default HomePage
