class Player {
constructor(x,y,size,color){
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.isGrounded = false;
    }
    draw(){
        pen.fillStyle = this.color;
        pen.fillRect(this.x,this.y,this.size,this.size);
        }
}