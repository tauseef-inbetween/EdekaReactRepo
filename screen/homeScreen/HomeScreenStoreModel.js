var HomeScreenStoreModel = (function () {
    var allScreens = [
        {title: "Calender", isSelected: true},
        {title: "Campaign", isSelected: false},
        {title: "Template", isSelected: false},
        {title: "Promotion", isSelected: false},
        {title: "Assortment", isSelected: false},
        {title: "Content", isSelected: false},
        {title: "Target", isSelected: false},
        {title: "Report", isSelected: false}
    ];

    return {
        getAllScreens: function () {
            return allScreens;
        },

        setAllScreens: function (allScreens_p) {
            allScreens = allScreens_p;
        }
    };
})();