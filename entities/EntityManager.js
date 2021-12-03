class EntityManager {

    constructor(entities) {
        this.entities = entities;
    }

    tick(player) {

        for (let i = 0; i < this.entities.length; i++) {
            this.entities[i].tick(player, this);
            if(this.entities[i].x > 800 || this.entities[i].x < 0 || this.entities[i].y > 800 || this.entities[i].y < 0) this.removeEntity(i);
        }
    }

    render() {
        for (let i = 0; i < this.entities.length; i++) {
            this.entities[i].render();
        }
    }

    removeEntity(index) {
        this.entities.splice(index, 1);
    }

    newEntity(entity) {
        this.entities.push(entity);
    }

}
