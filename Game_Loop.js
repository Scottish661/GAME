function GameLoop(){
fill.rectClear(0,0,CS,CS)
this.draw()
Gravity()
requestAnimationFrame(GameLoop)
}
GameLoop();