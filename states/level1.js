class Level1 {

    constructor() {
        this.entityManager = new EntityManager([]);
        this.playerManager = new PlayerManager([new Player(400, 700, 2, 5, 5),
        new EnemyShooter(150, 100, 60, 10, 1, 1),
        new EnemyShooter(300, 100, 60, 10, 1, 1),
        new EnemyShooter(450, 100, 60, 10, 1, 1),
        new EnemyShooter(600, 100, 60, 10, 1, 1)]);

        this.healthDisplay = new HealthDisplay(5, 5, 50, 700, 15);
    }

    tick() {
        this.entityManager.tick(this.playerManager.players[0]);
        this.playerManager.players[0].move();
        this.playerManager.tick(this.entityManager.entities, this.playerManager.players[0], this.entityManager);

        if (this.playerManager.players[0].isInWinningZone()) nextState();
        if (this.playerManager.players[0].currentHealth <= 0) setState(0);
        this.healthDisplay.tick(this.playerManager.players[0]);
    }

    render() {
        this.playerManager.render();
        this.entityManager.render();
        this.healthDisplay.render();
    }

    mouseClicked() {
        
    }

}