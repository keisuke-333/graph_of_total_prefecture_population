import { FC, ReactNode } from 'react'

import styles from './index.module.scss'

type Props = {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <header className={styles.header}>都道府県別総人口推移グラフ</header>
      <main className={styles.main}>{children}</main>
    </>
  )
}

export default Layout
