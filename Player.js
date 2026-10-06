class Player {
constructor(x,y,size,color){
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    }
    draw(){
        pen.fillStyle = this.color;
        pen.fillRect(this.x,this.y,this.size,this.size);
        }
}
let player1 = new Player(50,5,30,"rgb(0,0,255)")
player1.draw()