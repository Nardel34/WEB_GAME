class PlayerController {

    setIdleStaying(agent, direction) {
        $(agent.className).css('background-image', 'url(../assets/player/idle_' + direction + '.gif)');
    }
    setIdleMoving(agent, direction) {
        $(agent.className).css('background-image', 'url(../assets/player/movement_' + direction + '.gif)');
    }
    setIdleSlashing(agent, direction) {
        $(agent.className).css('background-image', 'url(../assets/player/slashing_' + direction + '.gif)');
    }

    positionX(agent, direction = "") {

        var v = 1;
        switch (direction) {
            case "ArrowRight":
                agent.PositionX += v;
                agent.direction = true;

                this.setIdleMoving(agent, 'right');
                $(agent.className).css('left', agent.PositionX + '%');
                break;

            case "ArrowLeft":
                agent.PositionX -= v;
                agent.direction = false;

                this.setIdleMoving(agent, 'left');
                $(agent.className).css('left', agent.PositionX + '%');
                break;

            case "":
                if (agent.direction) {
                    this.setIdle(agent, 'right');
                } else {
                    this.setIdle(agent, 'left');
                }
                break;
        }

    }
}