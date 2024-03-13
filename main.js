const btn = document.querySelector("button");
const controller = new AbortController();

function random(number){
    return Math.floor(Math.random()*(number+1));
}

function changeBackground(){
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
}

// btn.addEventListener("mouseover",changeBackground,{signal: controller.signal},);
btn.onclick=changeBackground;

