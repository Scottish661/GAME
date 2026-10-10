document.addEventListener("touchmove", e => {
    if(player1.Alive){
    player1.x = e.touches[0].clientX - canvas.getBoundingClientRect().left - player1.size / 2;
    player1.y = e.touches[0].clientY - canvas.getBoundingClientRect().top - player1.size / 2;
    }
});