console.log(this);

function test(){
    console.log("this from test:", this);
}
test();
document.querySelector(".btn").onclick = test;

function Message(){
    console.log("this from Message", this);
}
let message = new Message();

let test1 = ()=>{
    console.log("this from test1",this)
    }
test1();
document.querySelector(".btn1").onclick = test1;

function Test(){
    let test = 1

    function innerTest(){
        test = 2;
    }
    innerTest();

    this.test1Method = ()=>{
        text = 3;
        this.test1 = 2;
    }
    console.log(test);
    console.log(this.test1);
    return test;
}
console.log(Test());
let test2 = new Test();
test2.test1Method();
