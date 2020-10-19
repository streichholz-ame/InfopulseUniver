(function(){
    function countCals(cals, weight){
        return cals * weight / 100;
    }
    function btnClick() {
        let     chooseProduct   = document.querySelector('#chooseProduct').value,
                weight          = document.querySelector('#weight'),
                result          = document.querySelector('#result'),
                empty           = document.querySelector('#empty');
        if(chooseProduct === "" || weight.value === ""){
            weight.classList.add("highlight");
            empty.style.display = "inline";
            
        }
        else{
            result.value = countCals(chooseProduct, weight.value);
            empty.style.display = "none";
            weight.classList.remove("highlight");
        }
    }
    const btn = document.querySelector('#btn');
    btn.onclick = btnClick;

    function clickOnImage(){
        let     picture     =   document.querySelector('#tonyStark').alt,
                answer      =   document.querySelector('#ironMan');
        answer.value = picture;
    }
    const pic = document.querySelector('#tonyStark');
    pic.onclick = clickOnImage;
}());