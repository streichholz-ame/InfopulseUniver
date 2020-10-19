  class Gallery {
    constructor(id){
        this.gallery                    = $(id);
        this.smallImgBlocks             = this.gallery.children(".b-picture");
        this.bigImg                     = this.gallery.find(".b-preview__image");
        this.prevImg                    = this.gallery.find(".b-preview__prevImage");
        this.previewBlock               = this.gallery.children(".b-preview");
        this.bigImgTitle                = this.gallery.find(".b-preview__text");
        this.btns                       = this.gallery.find(".b-preview__arrow")
        this.smallImgsQty               = this.smallImgBlocks.length;
        this.smallImgsQtyPlace          = this.gallery.find(".b-preview__maxPlace");
        this.currentSmallImgBlockNum    = 0;
        this.currentImgNumPlace         = this.gallery.find(".b-preview__currentPlace");
        this.slideshowBtn               = this.gallery.find(".b-preview__slideshowBtn");
        this.isSlideshowStart           = false;
        this.slideshowPeriod            = 1000;
        this.slideshowSetInterval       = null;
        this.toggle                     = true;
        this.createEvents();
    }
    showPreviewBlock(event){
        let currentSmallImgBlock    = $(event.currentTarget);

        this.display(currentSmallImgBlock);
        this.previewBlock.addClass("b-preview_shown");
    }   
    display(currentSmallImgBlock){
        let     currentSmallImg         = currentSmallImgBlock.children(".b-picture__image"),
                currentSmallImgSrc      = currentSmallImg.attr("src"),
                currentSmallImgAlt      = currentSmallImg.attr("alt"),
                bigImgSrc               = currentSmallImgSrc.replace("small_", "");
        this.currentSmallImgBlockNum = this.smallImgBlocks.index(currentSmallImgBlock);
        this.prevImg.attr("src", this.bigImg.src);
        this.bigImg.attr("src", bigImgSrc);
        this.bigImgTitle.text(currentSmallImgAlt);
        this.currentImgNumPlace.text(this.currentSmallImgBlockNum + 1);
        this.smallImgsQtyPlace.text(this.smallImgsQty);
    }
    displayImage() {
        this.setImg(this.step);
        
        if (this.toggle) {
            this.prevImg.addClass("animation-hide");
            this.bigImg.addClass("animation-show");
        }
        else {
            this.prevImg.addClass("animation-show");
            this.bigImg.addClass("animation-hide");
        }

        
        this.toggle = ! this.toggle;
        setTimeout(this.removeClasses.bind(this), 1000);
    }
    removeClasses() {
        this.prevImg.removeClass("animation-show");
        this.bigImg.removeClass("animation-hide");
        this.prevImg.removeClass("animation-hide");
        this.bigImg.removeClass("animation-show");
    }
    hideImage() {
        this.prevImg.addClass("animation-show");
        this.bigImg.addClass("animation-hide");
    }
    closePreviewBlock(event){
        if(!event || $(event.target).hasClass("b-preview_shown")){
            this.previewBlock.removeClass("b-preview_shown");
            this.stopSlideshow();
        }
    }
    changeImg(){
        let currentBtn = $(event.currentTarget),
        step = currentBtn.data("step");
        this.step = step;
        this.hideImage();
        setTimeout(this.displayImage.bind(this), 1000);
    }
    setImg(step){
        this.currentSmallImgBlockNum += step;
            if(this.currentSmallImgBlockNum < 0){
                this.currentSmallImgBlockNum = this.smallImgsQty - 1;
            }
            else if(this.currentSmallImgBlockNum >= this.smallImgsQty){
                this.currentSmallImgBlockNum = 0;
            }
        let currentSmallImgBlocks = this.smallImgBlocks.eq(this.currentSmallImgBlockNum);
        this.display(currentSmallImgBlocks);
    }
    keyboardEvents(event){
        if(event.which === 27){
            this.closePreviewBlock();
        }
        else if(event.which === 37)
        {
            this.setImg(-1);
        }
        else if(event.which === 39){
            this.setImg(1);
        }
    }
    slideshow(){
        if(this.isSlideshowStart){
            this.stopSlideshow();
        }
        else {
            this.slideshowBtn.text("stop");
            this.isSlideshowStart = true;
            this.slideshowSetInterval = setInterval(()=>{
                                            this.setImg(1)
                                        }, this.slideshowPeriod);
                                    }
    }
    stopSlideshow(){
        this.slideshowBtn.text("start");
        this.isSlideshowStart = false;
        clearInterval(this.slideshowSetInterval);
    }
    createEvents(){
        this.smallImgBlocks.click(this.showPreviewBlock.bind(this));
        this.previewBlock.click(this.closePreviewBlock.bind(this));
        this.btns.click(this.changeImg.bind(this));
        $("body").keyup(this.keyboardEvents.bind(this)) //keyup, keydown, keypress
        this.slideshowBtn.click(this.slideshow.bind(this))
    }
}
let gallery = new Gallery("#gallery1");