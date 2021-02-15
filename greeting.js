const form = document.querySelector(".form_greeting"),
      input = form.querySelector("input"),
      msg = document.querySelector(".msg_greeting");

function saveName(value){
    localStorage.setItem("user_name", value);
}

function submitHandler(event){
    event.preventDefault();
    const currentValue = input.value;
    setMsgCon(currentValue);
    saveName(currentValue);
}

function setFormCon(){
    msg.style.display = "none";
    form.style.display = "block";

    form.addEventListener("submit", submitHandler)
}

function setMsgCon( userName ){
    form.style.display = "none";
    msg.style.display = "block";

    msg.innerText = `Hello, ${userName}`;
}

function setArea(){
    const userName = localStorage.getItem("user_name");
    if( userName !== null ){
        setMsgCon(userName);
    }else{
        setFormCon();
    }
}

function init(){
    setArea();
}

init();