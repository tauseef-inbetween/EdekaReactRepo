var MainContainerStore = {
    data: MainContainerStoreModel,

    getAllData: function () {
        return this.data.getAllScreens();
    },

    loadScreen: function (screenName) {
        var screens = this.getAllData();
        for (var iScreenCount = 0; iScreenCount < screens.length; iScreenCount++) {
            screens[iScreenCount].isSelected = (screens[iScreenCount].title == screenName);
        }

        loadDataFromNetwork(screenName);
        this.trigger('change');
    }
};

MicroEvent.mixin(MainContainerStore);