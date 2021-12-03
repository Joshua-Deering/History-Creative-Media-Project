class Hitbox {

    /**
     * @param {Number} x x-coordinate of the hitbox
     * @param {Number} y y-coordinate of the hitbox
     * @param {Number} w width of the hitbox
     * @param {Number} h height of the hitbox
     */
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    /**
     * Update position of the hitbox (for moving objects)
     * @param {Number} x new x-coordinate
     * @param {Number} y new y-coordinate
     */
    update(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * Checks whether this hitbox intersects with a given hitbox
     * @param {Hitbox} hitbox The hitbox to check
     * @returns {Boolean} True if the 2 hitboxes intersect; false otherwise
     */
    intersects(hitbox) {
        if (this.x < hitbox.x + hitbox.w &&
            this.x + this.w > hitbox.x &&
            this.y < hitbox.y + hitbox.h &&
            this.h + this.y > hitbox.y) {
            return true;
        } else {
            return false;
        }
    }

}