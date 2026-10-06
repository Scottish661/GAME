class player {
constructor(x,y,this.size,color)
    this.x = x;
    this.y = y;
    this.Size = size
    }
    draw(){
        pen.fillStyle = this.color;
        pen.fillRect(this.x,this.y,this.size,this.size);
        }
}
let player1 = new player(50,50,30,50,rgb"(255,0,0)")
player1.draw()