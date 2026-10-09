const direction = ['x','x','y']
const speed = [-1,1,-1]
const Lables = ["Left","Right","Jump"];
function Mobile_control(object,index){
object[direction[index]] += speed[index];
}
for (let i = 0; i < direction.length; i++){
document.body.innerHTML += `<button onclick="Mobile_control(player1,${i})"> ${Lables[i]}</button>`; 
    }