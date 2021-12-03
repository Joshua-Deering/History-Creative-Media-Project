class Level3Win {

    constructor() {
        this.font = loadFont("./fonts/ARCADECLASSIC.TTF")
        this.nextButton = new TextButton(290, 500, 250, 50, this.font, 255, 50, "Next level", this.onNextButtonClick);
    }

    tick() {
        this.nextButton.tick();
    }

    render() {
        this.nextButton.render();

        textFont(this.font);
        textSize(75);
        text("Level 3 complete!", 100, 300)
    }

    mouseClicked() {
        this.nextButton.mouseClicked();
    }

    onNextButtonClick() {
        nextState();
    }

}