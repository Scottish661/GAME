function Gravity(object){
    object.isGrounded = false;
 if(!object.isGrounded){
        object.y++;    }
    if(object.y >= CS - object.size){
        object.y = CS - object.size;
        object.isGrounded = true;
    }}