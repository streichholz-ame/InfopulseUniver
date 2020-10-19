class PhotoEditor {
    constructor(id){
        this.photoEditor    = $(id);
        this.btn            = this.photoEditor.find('#changeBtn');
        this.photoUrl       = this.photoEditor.find('#imgUrl');
        this.photo          = this.photoEditor.find('#imageContainer img');
        this.filterType     = this.photoEditor.find('.css-filter-type');
        this.filters        = {}

        this.createEvents();
    }

    decoratePhoto(){
        let currentRange            = $(event.currentTarget),
            currentFilter           = currentRange.data('filter'),
            currentUnit             = currentRange.data('unit'),
            filterList              = '';

        this.filters[currentFilter] = {
            'value'     : currentRange.val(),
            'unit'      : currentUnit
        };
        $.each(this.filters, (filter, filterData)=>{
            filterList += `${filter}(${filterData.value}${filterData.unit}) `
        });

        this.photo.css('filter', filterList);
    }

    changePhoto(){
        console.log(this.photo)
        this.photo.attr('src', this.photoUrl.val());
    }

    createEvents(){
        this.btn.click(this.changePhoto.bind(this));
        this.filterType.change(this.decoratePhoto.bind(this)).mousemove(this.decoratePhoto.bind(this));
    }
}

let pe = new PhotoEditor('#editor');