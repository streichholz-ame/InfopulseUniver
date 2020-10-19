class Slider{
    constructor(id){
        this.slider             = $(id);
        this.sliderBox          = this.slider.children(".slides");
        this.slides             = this.slider.find(".slides__slide");
        this.slidesQty          = this.slides.length;
        this.btnsArrow          = this.slider.find(".btn-arrow");
        this.sliderWidth        = this.slider.width();
        //console.log(this.slidesQty, this.sliderWidth);
        this.init();
        this.createEvents();
    }
    init(){
        this.slider.find(".slides__slide:last-child").prependTo(this.sliderBox);
        this.sliderBox.css({marginLeft: - this.sliderWidth});
    }
    move(step){
        this.sliderBox.animate({left: this.sliderWidth * step}, 400, ()=>{
            step > 0 
            ? this.slider.find(".slides__slide:last-child").prependTo(this.sliderBox)
            : this.slider.find(".slides__slide:first-child").appendTo(this.sliderBox);
            this.sliderBox.css("left", "0");
        });
    }
    createEvents(){
        this.btnsArrow.click((event)=>{
            this.move($(event.currentTarget).data("step"))
        });
    }
}

let slider = new Slider("#slider");