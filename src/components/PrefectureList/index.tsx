import { FC } from 'react'

import { PrefecturesData } from '@/types'

import styles from './index.module.scss'

type Props = {
  data: PrefecturesData | undefined
  onChange: (name: string, prefName: number, check: boolean) => void
}

const PrefectureList: FC<Props> = ({ data, onChange }) => {
  return (
    <div className={styles.module}>
      {data?.result.map(({ prefCode, prefName }) => (
        <div className={styles.checkField} key={prefCode}>
          <label className={styles.labelArea} htmlFor={prefName}>
            <input
              type='checkbox'
              name='Prefecture name'
              id={prefName}
              onChange={(event) => onChange(prefName, prefCode, event.target.checked)}
            />
            {prefName}
          </label>
        </div>
      ))}
    </div>
  )
}

export default PrefectureList
