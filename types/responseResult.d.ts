interface IResponseResult<T> {
  code: number
  message: string
  type: string
  result: T
}

export { IResponseResult }
