class Bullet {

    constructor(x, y, vector) {
        this.x = x;
        this.y = y;
        this.vector = vector;
        this.angle = Math.atan2(this.vector.y, this.vector.x) * 180 / Math.PI;
        this.img = loadImage("./images/bullet.png");

        this.width = 8;
        this.height = 8;
        this.hitbox = new Hitbox(this.x, this.y, this.width, this.height);
    }

    tick() {
        this.x += this.vector.x;
        this.y += this.vector.y;
        this.hitbox.update(this.x, this.y);
    }

    render() {
        push();
        translate(this.x, this.y);
        rotate(this.angle); //rotate bullet based on direction
        image(this.img, -this.width, -this.height) //draw bullet
        pop();
    }
}