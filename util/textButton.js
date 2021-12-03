class TextButton {

    constructor(x, y, width, height, font, fontColor, fontSize, text, parentOnClick) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.font = font;
        this.fontColor = fontColor;
        this.fontSize = fontSize;
        this.text = text;
        this.parentOnClick = parentOnClick;

        this.hitbox = new Hitbox(this.x, this.y, this.width, this.height);
        this.mousehitBox = new Hitbox(mouseX, mouseY, 1, 1)
    }

    tick() {
        this.mousehitBox.update(mouseX, mouseY);
    }

    render() {
    //     noStroke()
    //     fill(100)
    //     rect(this.x - 5, this.y, this.width + 5, this.height + 5)
        fill(this.fontColor)
        textFont(this.font);
        textSize(this.fontSize);
        text(this.text, this.x, this.y + 60);
    }

    mouseClicked() {
        if (this.mousehitBox.intersects(this.hitbox)) this.onClick();
    }

    onClick() {
        this.parentOnClick();
    }

}