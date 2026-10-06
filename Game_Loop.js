function GameLoop(){
pen.clearRect(0,0,CS,CS)
player1.draw()
Gravity()
requestAnimationFrame(GameLoop)
}
GameLoop();