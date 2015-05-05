CarouselStore = {
    moveDuration: 600,
    previousLeftPosition: 0,
    leftPosition: 0,

    getMoveDuration: function () {
        return this.moveDuration;
    },

    setMoveDuration: function (moveDuration) {
        this.moveDuration = moveDuration;
    },

    getPreviousLeftPosition: function () {
        return this.previousLeftPosition;
    },

    setPreviousLeftPosition: function (previousLeft) {
        this.previousLeftPosition = previousLeft;
    },

    getLeftPosition: function () {
        return this.leftPosition;
    },

    setLeftPosition: function (leftPosition) {
        this.leftPosition = leftPosition;
    },

    setLeftPositionWithTrigger: function (leftPosition) {
        this.setLeftPosition(leftPosition);
        this.trigger('change');
    }
};
MicroEvent.mixin(CarouselStore);