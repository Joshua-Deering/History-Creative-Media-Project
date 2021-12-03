class HealthDisplay {

    constructor(maxHealth, health, x, y, xSeparation) {
        this.maxHealth = maxHealth;
        this.health = health;
        this.x = x;
        this.y = y;
        this.xSeparation = xSeparation;

        this.fullHeart = loadImage('./images/heart-full.png');
        this.halfHeart = loadImage('./images/heart-half.png');
        this.emptyHeart = loadImage('./images/heart-empty.png');
    }

    tick(player) {
        this.health = player.currentHealth;
    }

    render() {
        let health = this.health;
        for (let i = 0; i < this.maxHealth; i++) {
            if (health >= 1) {
                image(this.fullHeart, this.x + (this.xSeparation * i), this.y);
                health--;
                continue;
            }
            if (health == 0.5) {
                image(this.halfHeart, this.x + (this.xSeparation * i), this.y);
                health--;
                continue;
            }
            if (health <= 0) {
                image(this.emptyHeart, this.x + (this.xSeparation * i), this.y);
            }
        }
    }

}