const data = []

for (let x = 2; x <= 300; x++) {
  data.push({x: x, y: Math.floor(Math.random() * 90)})
}

export default data;