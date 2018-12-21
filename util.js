export const classNames = obj => {
  let cls = []
  for (let key in obj) {
    if (obj[key]) {
      cls.push(key)
    }
  }
  return cls.join(' ')
}