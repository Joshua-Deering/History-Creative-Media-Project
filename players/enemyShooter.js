class EnemyShooter {

    constructor(x, y, shootingSpeed, bulletSpeed, accuracy, health) {
        this.x = x;
        this.y = y;
        this.shootingSpeed = shootingSpeed; // ticks/shot (how many ticks in between shots)
        this.bulletSpeed = bulletSpeed; // how fast the bullet moves
        this.width = 8;
        this.height = 8;

        this.gunAngle = 0;
        this.dTicks = 0;
        this.img = loadImage("./images/enemysoldier.png");
    }

    tick(entities, player, entityManager) {
        this.gunAngle = Math.atan2(player.y - this.y, player.x - this.x) * 180 / Math.PI

        this.dTicks += 1;
        if (this.dTicks >= this.shootingSpeed) {

            let vector = { "x": (player.x + player.width / 2) - this.x, "y": (player.y + player.height / 2 + 10) - this.y };
            let magnitude = Math.sqrt(Math.pow(this.x - player.x, 2) + Math.pow(this.y - player.y, 2));
            let unitVector = { "x": vector.x / magnitude, "y": vector.y / magnitude }

            let angleVector = {
                "x": (unitVector.x * this.bulletSpeed),
                "y": (unitVector.y * this.bulletSpeed),
            }
            entityManager.newEntity(new Bullet(this.x, this.y, angleVector))
            this.dTicks = 0;
        }
    }

    render() {
        push();
        translate(this.x, this.y);
        rotate(this.gunAngle + 90); //rotate based on direction
        image(this.img, -this.width, -this.height) //draw bullet
        pop();
    }

}
