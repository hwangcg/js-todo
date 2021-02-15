const body = document.querySelector("body");
const imgCnt = 5;

function drawImage(num){
    const img = new Image();
    img.src = `image/${num+1}.jpg`;
    img.classList.add("bg_image");
    body.appendChild(img);
}

function genRandomNum(){
    const number = Math.floor(Math.random() * imgCnt);
    return number;
}

function init(){
    const randomNumber = genRandomNum();
    drawImage(randomNumber);
}

init();