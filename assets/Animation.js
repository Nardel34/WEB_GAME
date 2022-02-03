player = new Player(100, 50, 1.2, 40, "#player");


document.addEventListener('keydown', (e) => {
    player.move = true
    movePlayer = new PlayerController();
    movePlayer.positionX(player, e.key);
});
document.addEventListener('keyup', (e) => {
    player.move = false;
    movePlayer = new PlayerController();
    movePlayer.positionX(player, "");
});