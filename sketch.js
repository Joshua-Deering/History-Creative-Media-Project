

let w = 800,
    h = 800 //canvas width and height

let entityManager;
let playerManager;

let states = [];
let state = 2;
let img;

function setup() {
    let canvas = createCanvas(w, h);

    let bg = document.getElementById("bg")
    canvas.parent(bg)

    angleMode(DEGREES);
    img = loadImage("./images/map.jpg");

    states[0] = new DeathScreen();
    states[1] = new HowToPlayScreen();
    states[2] = new MenuScreen();
    states[3] = new Level1();
    states[4] = new Level1Win();
    states[5] = new Level2();
    states[6] = new Level2Win();
    states[7] = new Level3();
    states[8] = new Level3Win();
    states[9] = new Level4();
    states[10] = new Level4Win();
    states[11] = new Level5();
}

function draw() {
    background(0);
    image(img, 0, 0);

    states[state].tick();
    states[state].render();
}

function mouseClicked() {
    states[state].mouseClicked();
}

function nextState() {
    states[0] = new DeathScreen();
    states[1] = new HowToPlayScreen();
    states[2] = new MenuScreen();
    states[3] = new Level1();
    states[4] = new Level1Win();
    states[5] = new Level2();
    states[6] = new Level2Win();
    states[7] = new Level3();
    states[8] = new Level3Win();
    states[9] = new Level4();
    states[10] = new Level4Win();
    states[11] = new Level5();
    state++;
}

function setState(stateNum) {
    state = stateNum
}