export default (planes, {sortBy}) => {
  return planes.sort((a, b) => {
    if (sortBy === 'passengers') {
      return a.passengers < b.passengers ? 1 : -1
    } else if (sortBy === 'speed') {
      return a.speed < b.speed ? 1 : -1
    }
    else if (sortBy === 'price') {
      return a.price < b.price ? 1 : -1
    }
    else if (sortBy === 'range') {
      return a.range < b.range ? 1 : -1
    }
  })
}