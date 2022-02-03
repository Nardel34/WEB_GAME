class PlayerController {

    setIdleStaying(agent, direction) { //                                      `${direction}.gif`
        $(agent.className).css('background-image', 'url(../assets/player/idle_' + direction + '.gif)');
    }
    setIdleMoving(agent, direction) {
        $(agent.className).css('background-image', 'url(../assets/player/movement_' + direction + '.gif)');
    }
    setIdleSlashing(agent, direction) {
        $(agent.className).css('background-image', 'url(../assets/player/slashing_' + direction + '.gif)');
    }

    positionX(agent, direction) {

        switch (direction) {
            case "ArrowRight":
                if (agent.move) {
                    setTimeout(() => {
                        this.positionX(agent, direction);
                    }, 100);
                    this.setIdleMoving(agent, 'right');
                    if (agent.PositionX <= 80) {
                        agent.PositionX += agent.speed;
                        agent.direction = true;
                        console.log(agent.positionX);

                        $(agent.className).css('left', agent.PositionX + '%');
                    }
                }
                break;

            case "ArrowLeft":
                if (agent.move) {
                    setTimeout(() => {
                        this.positionX(agent, direction);
                    }, 100);
                    this.setIdleMoving(agent, 'left');
                    if (agent.PositionX >= 5) {
                        agent.PositionX -= agent.speed;
                        agent.direction = true;
                        console.log(agent.positionX);

                        $(agent.className).css('left', agent.PositionX + '%');
                    }
                }
                break;

            case "":
                if (agent.direction) {
                    this.setIdleStaying(agent, 'right');
                } else {
                    this.setIdleStaying(agent, 'left');
                }
                break;
        }

    }
}