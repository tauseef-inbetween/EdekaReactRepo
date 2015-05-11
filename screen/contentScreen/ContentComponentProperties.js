var ContentComponentProperties = {

    contentViewStyle: 'thumbnail',
    contentViewMode: 'viewMode',
    carouselPosition :{
        leftPosition: 0,
        previousLeftPosition: 0
    },

    selectedProps: {
        selectedProduct: null,
        selectedIndex: 0,
        selectedNoteIndex: -1,

        getSelectedProduct: function () {
            return this.selectedProduct;
        },

        setSelectedProduct: function (selectedProduct) {
            this.selectedProduct = selectedProduct;
            this.selectedNoteIndex = -1;
        },

        setSelectedIndex: function (selectedIndex) {
            this.selectedIndex = selectedIndex;
        },

        setSelectedNoteIndex: function (selectedIndex) {
            this.selectedNoteIndex = selectedIndex;
        }
    },

    getContentViewStyle: function () {
        return this.contentViewStyle;
    },

    setContentViewStyle: function (contentViewStyle) {
        this.contentViewStyle = contentViewStyle;
    },

    getContentViewMode: function () {
        return this.contentViewMode;
    },

    setContentViewMode: function (contentViewMode) {
        this.contentViewMode = contentViewMode;
    },

    getSelectedProps: function () {
        return this.selectedProps;
    },

    getCarouselPosition: function () {
        return this.carouselPosition;
    }
};
