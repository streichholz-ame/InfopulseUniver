class Clock {
    constructor(id){
        this.clock = document.getElementById(id);
        this.main();
        setInterval(this.main.bind(this), 1000);
        }
    main(){
        this.getTime("getHours", ".hours");
        this.getTime("getMinutes", ".min");
        this.getTime("getSeconds", ".sec");
    }
    getTime(methodName, cssClass){
        let today   = new Date(),
            time    = today[methodName](),
            place   = this.clock.querySelector(cssClass); 
        place.innerText = time < 10 ? `0${time}` : time;
    }
}
let clock1 = new Clock("clock1");

//написать скрипт в макет