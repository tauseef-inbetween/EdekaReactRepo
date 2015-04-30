var MockData = MockData || {};

MockData.products = [];
MockData.productTypes = ["Structured", "Semi-Structured", "CMS", "Asset", "Impulse"];
MockData.productWorkflowStatus = ["Requested", "Created", "Rework", "Updated", "Approved", "Published", "Archived"];
;
MockData.productClasses = [
    {
        label: "Standard",
        groups: [
            {
                label: "Title & Teaser",
                defaultValue: true,
                groupName: "Standard",
                contents: [
                    {label: "Title", defaultValues: [], type: "singleValued"},
                    {label: "Teaser", defaultValues: [], type: "Description"}
                ]
            },
            {
                label: "Feature & Description",
                defaultValue: false,
                groupName: "Standard",
                contents: [
                    {label: "Feature", defaultValues: [], type: "singleValued"},
                    {label: "Description", defaultValues: [], type: "Description"}
                ]
            }
        ]
    },
    {
        label: "Product",
        groups: [
            {
                label: "Title & Teaser",
                defaultValue: true,
                groupName: "Product",
                contents: [
                    {label: "Title", defaultValues: [], type: "singleValued"},
                    {label: "Teaser", defaultValues: [], type: "Description"}
                ]
            },
            {
                label: "Feature & Description",
                defaultValue: false,
                groupName: "Product",
                contents: [
                    {label: "Feature", defaultValues: [], type: "singleValued"},
                    {label: "Description", defaultValues: [], type: "Description"}
                ]
            },
            {
                label: "Bonus Point",
                defaultValue: true,
                groupName: "Product",
                contents: [
                    {label: "Bonus Point", defaultValues: [], type: "singleValued"}
                ]
            },
            {
                label: "Logistic Block",
                defaultValue: true,
                groupName: "Product",
                contents: [
                    {label: "Logistic Block", defaultValues: [1, 2, 3, 4], type: "optionValued"}
                ]
            },
            {
                label: "Price",
                defaultValue: true,
                groupName: "Product",
                contents: [
                    {label: "Price", defaultValues: [], type: "singleValued"}
                ]
            },
            {
                label: "Me",
                defaultValue: false,
                groupName: "Product",
                contents: [
                    {label: "Me", defaultValues: [], type: "singleValued"}
                ]
            },
            {
                label: "Manufacturer",
                defaultValue: false,
                groupName: "Product",
                contents: [
                    {label: "Manufacturer", defaultValues: [], type: "singleValued"}
                ]
            },
            {
                label: "Conflicting Manufacturer",
                defaultValue: false,
                groupName: "Product",
                contents: [
                    {label: "Conflicting Manufacturer", defaultValues: [], type: "singleValued"}
                ]
            }
        ]
    },
    {
        label: "Recipes",
        groups: [
            {
                label: "Zutaten Fur",
                defaultValue: true,
                groupName: "Recipes",
                contents: [
                    {label: "Zutaten Fur", defaultValues: [], type: "singleValued"}
                ]
            },
            {
                label: "Zubereitungszeit",
                defaultValue: true,
                groupName: "Recipes",
                contents: [
                    {label: "Zubereitungszeit", defaultValues: [], type: "singleValued"}
                ]
            },
            {
                label: "Fertig In",
                defaultValue: true,
                groupName: "Recipes",
                contents: [
                    {label: "Fertig In", defaultValues: [], type: "singleValued"}
                ]
            },
            {
                label: "Je Portion",
                defaultValue: true,
                groupName: "Recipes",
                contents: [
                    {label: "Je Portion", defaultValues: [], type: "singleValued"}
                ]
            },
            {
                label: "Schwierigkeitsgrad",
                defaultValue: true,
                groupName: "Recipes",
                contents: [
                    {label: "Schwierigkeitsgrad", defaultValues: [], type: "singleValued"}
                ]
            },
            {
                label: "Kategorian",
                defaultValue: true,
                groupName: "Recipes",
                contents: [
                    {label: "Kategorian", defaultValues: [], type: "singleValued"}
                ]
            }
        ]
    }
];