class PlayerManager {

    constructor(players) {
        this.players = players;
    }

    tick(entities, player, entityManager) {
        for (let i = 0; i < this.players.length; i++) {
            this.players[i].tick(entities, player, entityManager);
        }
    }

    render() {
        for (let i = 0; i < this.players.length; i++) {
            this.players[i].render();
        }
    }

}