const data = [];
let prevy = 0;
let dev = 0;

for (let x = 2; x <= 300; x++) {
    dev = Math.floor(Math.random() * (90 - prevy) / 10 - (dev / 2 + 3));
    data.push({ x: x, y: prevy + dev });
    prevy = data[data.length - 1].y;
}
debugger;
export default data;
