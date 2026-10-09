class Player {
constructor(x,y,size,ImageName,health){
    this.x = x;
    this.y = y;
    this.size = size;
    this.isGrounded = false;
    this.img = new Image();
    this.img.src = ImageName;
    this.health = health
    }
    draw(){
pen.drawImage(this.img,this.x,this.y,this.size,this.size)}}