let cols, rows;
let scl = 20;
let w = window.innerWidth;
let h = window.innerHeight;

let zoff = 0;
let flowfield;

function setup() {
    createCanvas(w, h);
    cols = floor(w / scl);
    rows = floor(h / scl);
    flowfield = new Array(cols * rows);
}

function draw() {
    background(0);
    let yoff = 0;
    for (let y = 0; y < rows; y++) {
        let xoff = 0;
        for (let x = 0; x < cols; x++) {
            let index = x + y * cols;
            let angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
            let v = p5.Vector.fromAngle(angle);
            v.setMag(1);
            flowfield[index] = v;
            xoff += 0.1;

            stroke(255);
            push();
            translate(x * scl, y * scl);
            rotate(v.heading());
            stroke(0, 255, 0, 150);
            line(0, 0, scl, 0);
            pop();
        }
        yoff += 0.1;
        zoff += 0.0003;
    }
}
