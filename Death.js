function Death(object){
    if (object.immortal){
        return 
        }
else if(object.health <= 0){
    alert("you are dead");
    object.Alive = false
    }
}