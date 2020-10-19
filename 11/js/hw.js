class Popup {
    constructor(id) {
        this.popup = document.getElementById(id);
        this.counterElement = document.getElementById("counter");
        this.counter = 5;
        this.counterId = null;
        setTimeout(this.winAppear.bind(this), 1000);
    }
    winAppear(){
        this.popup.style.display = "block";
        this.counterId = setInterval(this.setCounterValue.bind(this), 1000);
    }
    setCounterValue(){
        this.counterElement.innerHTML = --this.counter;
        if(this.counter === 0){
            clearInterval(this.counterId);
            this.counterElement.innerHTML = "X";
            this.counterElement.disabled = false;
            this.createEvents();
        }
    }
    winClose(){
        this.popup.style.display = "none";
    }
    createEvents(){
        this.counterElement.onclick = this.winClose.bind(this);
    }
}
let popup = new Popup("join");