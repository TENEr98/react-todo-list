import { formatDistance } from 'date-fns'

export const mapperDiffTime = (arr) => {
  arr.map((item) => {
    item.updatedAt = new Date().getTime()
    item.diffTime = formatDistance(
      new Date(item.updatedAt),
      new Date(item.createdAt),
      {
        includeSeconds: true
      }
    )
    return { ...item }
  })
}
