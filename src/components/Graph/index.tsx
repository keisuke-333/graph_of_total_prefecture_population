import Highcharts from 'highcharts'
import highchartsAccessibility from 'highcharts/modules/accessibility'
import HighchartsReact from 'highcharts-react-official'
import { FC } from 'react'

import { Population } from '@/types'

import styles from './index.module.scss'

if (typeof window !== `undefined`) {
  highchartsAccessibility(Highcharts)
}

type Props = {
  population: Population[]
}

const Graph: FC<Props> = ({ population }) => {
  let series: Highcharts.SeriesOptionsType[] = []
  let categories = []

  for (let p of population) {
    let data = []
    for (let pd of p.data) {
      data.push(pd.value)
      categories.push(String(pd.year))
    }
    series.push({
      type: 'line',
      name: p.prefName,
      data: data,
    })
  }

  const options: Highcharts.Options = {
    title: {
      text: '総人口推移',
    },
    xAxis: {
      title: {
        text: '年度',
      },
      categories: categories,
    },
    yAxis: {
      title: {
        text: '人口数',
      },
    },
    series: series.length === 0 ? [{ type: 'line', name: '都道府県名', data: [] }] : series,
  }

  return (
    <div className={styles.module}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default Graph
