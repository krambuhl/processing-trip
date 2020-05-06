let frame = 0
let ratio = (6 / 3)

let columns = Math.ceil(32 / (15 / 32))
let rows = Math.ceil(32 / (15 / 32))

// columns = 71
// rows = 71
let size = columns

let height = rows * 14
let width = columns * 14

let cellWidth = width / columns
let cellHeight = height / rows

let half = Math.floor(rows / 2)

const frameEl = document.querySelector('#frame')

window.setup = function() {
  createCanvas(width, height)
}

window.draw = function() {
  strokeWeight(1)
  fill(255)
  clear()

  for (let x = 0; x < columns; x++) {
    for (let y = 0; y < rows; y++) {

      let centerX = x - half
      let centerY = y - half

      const offsetX = centerX / half
      const offsetXAbs = Math.abs(offsetX)
      const offsetY = centerY / half
      const offsetYAbs = Math.abs(offsetY)
      const offset = offsetX * offsetY
      const offsetAbs = Math.abs(offset)

      // const transient = Math.floor(74.3 * 4 / 2 * offsetAbs)
      // const transient = Math.floor((size - (frame / 10000)) * (15 / 3) * offsetAbs)
      const transient = Math.floor((size - (frame / 10000)) * ratio * offsetAbs)

      if (transient % 2) {
        fill(255)
      } else {
        fill(50)
      }
      rect(x * cellWidth, y * cellHeight, cellWidth, cellHeight)

    }
  }

  frameEl.innerText = frame

  // frame = frame + 5
  // console.log('draw')
}

ratio = (2 / 1)
frame = 26500
frame = 10000
frame = 9999
frame = 9999
// frame =49999
// frame = -4999

// ratio = (5 / 3)
// frame = 10000

// ratio = (2 / 1)
// frame = 29999s
// frame = 14000
// frame = 9999
// frame = 100
