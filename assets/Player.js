class Player {

    constructor(health, strength, speed = 0.2, PositionX = "", className = "", width = 200, direction = true, move = false) {
        this.health = health;
        this.strength = strength;
        this.speed = speed;
        this.PositionX = PositionX;
        this.className = className;
        this.width = width;
        this.direction = direction;
        this.move = move;

        $(className).css('left', PositionX + '%');
    }

    getHealth() {
        return this.health;
    }
    setHealth(health) {
        this.health = health;
        return this;
    }

    getStrength() {
        return this.strength;
    }
    setStrength(strength) {
        this.strength = strength;
        return this.strength;
    }

    getSpeed() {
        return this.speed;
    }
    setSpeed(speed) {
        this.speed = speed;
        return this.speed;
    }
}