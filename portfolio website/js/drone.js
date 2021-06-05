var drone = document.querySelector(".flying_drone");
document.addEventListener('mousemove',function(e){
    if(drone.style.left<e.x)
    {
        drone.style.transform= `rotateZ(${60}deg)`;
    }
    if(drone.style.left>e.x)
    {
        drone.style.transform= `rotateZ(${-60}deg)`;
    }
    drone.style.left = e.clientX+"px";
    drone.style.top = e.clientY+"px";
    drone.style.transform= `rotateZ(${0}deg)`;
    // drone.style.transform = `translate(${-e.x/2}px, ${-e.y/2}px)`;
    console.log("dronex : "+ drone.style.left, ", droney : "+drone.style.top);
})
