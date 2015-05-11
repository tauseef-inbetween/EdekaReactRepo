var HomeScreenStore = {

    data: HomeScreenStoreModel,

    getData: function () {
        return this.data.getAllScreens();
    },

    loadScreen: function (screenName) {
        var screens = this.getData();
        for (var iScreenCount = 0; iScreenCount < screens.length; iScreenCount++) {
            screens[iScreenCount].isSelected = (screens[iScreenCount].title == screenName);
        }

        loadDataFromNetwork(screenName);
        this.trigger('change');
    }
};

MicroEvent.mixin(HomeScreenStore);