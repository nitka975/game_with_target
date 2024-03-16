function getRandomNumber(size){
    const res = Math.floor(Math.random() * size);
    return res;
}

function getDistance(event, target){
    const diffX = event.offsetX - target.x ;
    const diffY = event.offsetY - target.y ;
    const c = Math.sqrt((diffX * diffX) + (diffY * diffY));
    return c;
}

function getDistanceHint(distance){
    if (distance < 10){
        return "Печет";
    } else if (distance < 20 ){
        return "Очень гаречо";
    } else if (distance < 40 ){
        return "Горечо";
    } else if (distance < 80 ){
        return "Тепло";
    } else if (distance < 160 ){
        return "Холодно";
    } else if (distance < 320 ){
        return "Очень холодо";
    } else{
        return"Можна замерзнуть";
    }
};

const widht = 700;
const height = 400;
let click = 0;
// корденаты сокровищя
const target ={
    x: getRandomNumber(widht),
    y: getRandomNumber(height)
};

const mapElement = document.getElementById("map");
mapElement.addEventListener("click", (event) =>{
    click++;
    // console.log(click);

    const distance = getDistance(event, target);
    const distanceHint = getDistanceHint(distance);

    const distanceElement = document.getElementById("distance");
    distanceElement.textContent = distanceHint ;

    if(distance < 8){
        alert("You are win!");
    };

});