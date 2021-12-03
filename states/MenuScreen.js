class MenuScreen {

    constructor() {
        this.font = loadFont("./fonts/ARCADECLASSIC.TTF")

        this.playButton = new TextButton(300, 350, 220, 55, this.font, 255, 100, "Play", this.onPlayButtonClicked);
        this.infoButton = new TextButton(180, 450, 440, 55, this.font, 255, 100, "Controls", this.onInfoButtonClicked);
    }

    tick() {
        this.playButton.tick();
        this.infoButton.tick();
    }

    render() {
        textFont(this.font);
        textSize(90);
        fill(255)
        text("Storm  the  Trench!", 15, 125);

        this.playButton.render();
        this.infoButton.render();
    }

    onPlayButtonClicked() {
        nextState();
    }

    onInfoButtonClicked() {
        setState(1);
    }

    mouseClicked() {
        this.playButton.mouseClicked();
        this.infoButton.mouseClicked();
    }

}