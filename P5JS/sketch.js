function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(220);
  rotateX(1);
  translate(-180, -180);
  normalMaterial();
  for (let l = 0; l < 36; l += 1) {
    for (let c = 0; c < 36; c += 1) {
      let offset = dist(l, c, 18, 18) / 5;
      let h = (sin(millis() / 1000 + offset) + 1) * 100;
      box(10, 10, h);
      translate(10, 0);
    }
    translate(-360, 10);
  }
}
