class Player {

    constructor(x, y, speed, maxHealth, currentHealth) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.maxHealth = maxHealth;
        this.currentHealth = currentHealth;
        this.width = 16;
        this.height = 32;
        this.img = loadImage('./images/soldier.png')

        this.hitbox = new Hitbox(this.x, this.y, this.width, this.height);
    }

    tick(entities, player, entityManager) {
        //check if player is hit by any bullets
        for (let i = 0; i < entities.length; i++) {
            if (this.hitbox.intersects(entities[i].hitbox)) {
                this.currentHealth -= 0.5;
                entityManager.removeEntity(i);
            }
        }

        this.move();
        this.hitbox.update(this.x, this.y)
    }

    render() {
        image(this.img, this.x, this.y)
    }

    move() {
        if (this.x <= 0) return this.x = 1;
        if (this.x + this.width >= width) return this.x = width - 1 - this.width;
        if (this.y <= 0) return this.y = 1;
        if (this.y + this.height >= height) return this.y = height - 1 - (this.height * 2);

        let dy = 0;
        let dx = 0;
        if (keyIsDown(87)) {
            dy -= this.speed //W
        }
        if (keyIsDown(83)) {
            dy += this.speed //S
        }
        if (keyIsDown(65)) {
            dx -= this.speed //A
        }
        if (keyIsDown(68)) {
            dx += this.speed //D
        }

        if (dx == 0 && dy == 0) return;

        let magnitude = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))
        let normalizedVector = {
            "x": dx / (magnitude),
            "y": dy / (magnitude)
        }

        this.x += normalizedVector.x * this.speed;
        this.y += normalizedVector.y * this.speed;
    }

    isInWinningZone() {
        if (this.y < 100) return true;
        return false;
    }

}