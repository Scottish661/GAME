function Gravity(object){
    if(!object.isGrounded){
player1.y++
}
if(object.y >= CS ){
    object.y = CS - object.size 
    object.isGrounded = true;
    }
}