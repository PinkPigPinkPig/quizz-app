export interface IQuestion {
  qnId: number
  qnInWords: string
  imageName: string
  options: string[]
  answer?: number
  level?: number
}
