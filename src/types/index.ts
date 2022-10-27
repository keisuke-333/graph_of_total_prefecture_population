export type PrefecturesData = {
  message: null
  result: {
    prefCode: number
    prefName: string
  }[]
}

export type PopulationData = {
  message: null
  result: {
    boundaryYear: number
    data: {
      label: string
      data: {
        year: number
        value: number
      }[]
    }[]
  }
}

export type Population = {
  prefName: string
  data: {
    year: number
    value: number
  }[]
}
