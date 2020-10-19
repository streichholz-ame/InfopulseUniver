class Calc{
    constructor(id){
        this.calculator = $(id);
        this.a = this.calculator.find(".b-calc__a");
        this.b = this.calculator.find(".b-calc__b");
        this.result = this.calculator.find(".b-calc__count");

        this.createEvents();
    }
    calcSum(event){
        event.preventDefault();
        $.ajax({
            "url"       : "send.php",
            "method"    : "post",
            "dataType"  : "json",
            "timeout"   : 1000,
            "data"      : {
                "a" : this.a.val(),
                "b" : this.b.val()
            },
            "success" : (serverResponce)=>{
                // console.log(serverResponce);
                // this.result.text(serverResponce.result);
                this.result.text(serverResponce.message);
            },
            "error" : (ajaxObject)=>{
                if(ajaxObject.status == "403"){
                    this.result.text("Возникли технические неисправности. Попробуйте повторить операцию позже.");
                }
                else if(ajaxObject.statusText == "timeout"){
                    this.result.text("Время ожидания истекло");
                }
            },
            "complete" : (ajaxObject)=>{
                console.log(ajaxObject);
                //console.log(ajaxObject.responceJSON.result);
            }
        });
    }
    createEvents(){
        this.calculator.submit(this.calcSum.bind(this));
    }
}

