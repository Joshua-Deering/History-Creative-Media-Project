class DeathScreen {

    constructor() {
        this.font = loadFont("./fonts/ARCADECLASSIC.TTF")
        this.nextButton = new TextButton(280, 500, 250, 50, this.font, 255, 50, "Back to Menu", this.onNextButtonClick);
    }

    tick() {
        this.nextButton.tick();
    }

    render() {
        this.nextButton.render();

        textFont(this.font);
        textSize(75);
        text("you died!", 250, 300)
    }

    mouseClicked() {
        this.nextButton.mouseClicked();
    }

    onNextButtonClick() {
        setState(2);
    }

}