function Gravity(){
    if(!player1.isGrounded){
player1.y++
}
if(player1.y >= CS ){
    player1.y = CS -player.size 
    player1.isGrounded = true;
    }
}