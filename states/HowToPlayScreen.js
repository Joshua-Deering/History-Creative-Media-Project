class HowToPlayScreen {

    constructor() {
        this.font = loadFont("./fonts/ARCADECLASSIC.TTF")
        this.backButton = new TextButton(300, 650, 220, 55, this.font, 255, 100, "Back", this.onBackButtonClicked)
    }

    tick() {
        this.backButton.tick()
    }

    render() {
        this.backButton.render();

        fill(255);
        textFont(this.font);
        text("WASD to move", 100, 200)
        text("Avoid dying", 100, 300)
        text("thats all\nhave fun!", 100, 400)
    }

    onBackButtonClicked() {
        nextState();
    }

    mouseClicked() {
        this.backButton.mouseClicked();
    }

}