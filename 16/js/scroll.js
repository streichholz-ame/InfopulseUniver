class PageScroll{
    constructor(id){
        this.page = $(id);
        this.topLink = this.page.find(".topLink");
        this.createEvents();
    }
    toggleTopLink(){
        if($(window).scrollTop() > 400){
            this.topLink.show();
        }
        else{
            this.topLink.hide();
        }
    }
    slowScroll(){
        event.preventDefault();
        $("html, body").animate({scrollTop: 0}, 400)
    }
    createEvents(){
        $(window).scroll(this.toggleTopLink.bind(this));
        this.topLink.click(this.slowScroll.bind(this));
    }
}

let scroll = new PageScroll("page1");