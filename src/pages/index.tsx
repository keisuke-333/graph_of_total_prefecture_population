import type { NextPage } from 'next'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import Graph from '@/components/Graph'
import Layout from '@/components/Layout'
import PrefectureList from '@/components/PrefectureList'
import Spinner from '@/components/Spinner'
import { usePopulation } from '@/hooks/usePopulation'
import { usePrefectures } from '@/hooks/usePrefectures'

const HomePage: NextPage = () => {
  const { getPopulation, population } = usePopulation()
  const { data } = usePrefectures()

  return (
    <Layout>
      <ErrorBoundary
        fallbackRender={({ error }) => <p className='errorMessage'>Error! {error.message}</p>}
      >
        <Suspense fallback={<Spinner />}>
          <PrefectureList data={data} onChange={getPopulation} />
        </Suspense>
      </ErrorBoundary>
      <Graph population={population} />
    </Layout>
  )
}

export default HomePage
