class FormChecker{
    constructor(id){
        this.form = document.getElementById(id);
        this.textfields = this.form.querySelectorAll(".b-textfield");
        this.message = this.form.querySelector(".b-form__message");
        this.createEvents();
    }
    checkTextfield(event, textfield){
        let currentTextfield = textfield ? textfield : event.target,
            currentTextfieldValue = currentTextfield.value,
            currentTextfieldName = currentTextfield.name,
            currentRe = new RegExp(REGEXPS[currentTextfieldName]),
            isTextfieldError = ! currentRe.test(currentTextfieldValue);

        currentTextfield.classList.toggle("b-textfield_error", isTextfieldError);
        return isTextfieldError;
    }

    checkForm(event){
        event.preventDefault();
        let isFormError = false;
            [...this.textfields].forEach((item)=>{
                let isTextfieldError = this.checkTextfield(null, item);
                    if(isTextfieldError){
                        isFormError = true;
                    }
            });
        this.message.classList.toggle("b-form__message_shown", isFormError);
    }
    createEvents(){
        [...this.textfields].forEach((item, i)=>{
            item.onblur = this.checkTextfield.bind(this);
        });
    this.form.onsubmit = this.checkForm.bind(this);
    }
}
let formChecker = new FormChecker("form2");