class Player {
constructor(x,y,size){
    this.x = x;
    this.y = y;
    this.size = size;
    this.isGrounded = false;
    }
    draw(){
pen.drawImage(player.gif,this.x,this.y,this.size,this.size)
        }
}
