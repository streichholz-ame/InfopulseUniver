class Gallery {
    constructor(id){
        this.gallery            = $(id);
        this.smallImgBlocks     = this.gallery.children(".b-picture");
        this.bigImg             = this.gallery.find(".b-preview__image");
        this.previewBlock       = this.gallery.children(".b-preview");
        this.bigImgTitle        = this.gallery.find(".b-preview__text");
        this.smallImgsQty       = this.smallImgBlocks.length;
        this.smallImgsQtyPlace  = this.gallery.find(".b-preview__maxPlace");
        this.createEvents();
    }
    showPreviewBlock(event){
        let currentSmallImgBlock    = $(event.currentTarget),
            currentSmallImg         = currentSmallImgBlock.children(".b-picture__image"),
            currentSmallImgSrc      = currentSmallImg.attr("src"),
            currentSmallImgAlt      = currentSmallImg.attr("alt"),
            bigImgSrc               = currentSmallImgSrc.replace("small_", "");
        this.bigImg.attr("src", bigImgSrc);
        this.bigImgTitle.text(currentSmallImgAlt);
        this.smallImgsQtyPlace.text(this.smallImgsQty);
        this.previewBlock.addClass("b-preview_shown");
    }   
    closePreviewBlock(event){
        if($(event.target).hasClass("b-preview_shown")){
            this.previewBlock.removeClass("b-preview_shown");
        }
    }
    createEvents(){
        this.smallImgBlocks.click(this.showPreviewBlock.bind(this));
        this.previewBlock.click(this.closePreviewBlock.bind(this))
    }
}
let gallery = new Gallery("#gallery1");