class Snowflake {

  constructor() {
    this.pos = createVector(300, 200);
    this.vel = createVector();
    this.acc = createVector();
  }

rendor() {
  stroke(255);
  strokeWeight(4);
  point(this.pos.x, this.pos.y);
}
