//shuffling algorithm from Kill' below. Lateam.js in the repository
const { hoppers } = require('./lateam.js')

const splitClasses = becoders => {
  const shuffled = becoders.sort(() => Math.random() - .5)
  const halfLen = (becoders.length / 2) | 0

  return [
    shuffled.slice(0, halfLen),
    shuffled.slice(halfLen, becoders.length)
  ]
}

splitClasses(hoppers)
.forEach((c, i) => {
  console.log(`Classe ${i+1}: ${c.join(', ')}\n\n`)
})