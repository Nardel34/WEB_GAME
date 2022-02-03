player = new Player(100, 50, 1.2, 40, "#player");


document.addEventListener('keydown', (e) => {
    move = new PlayerController();
    move.positionX(player, e.key);
});