var MockData = MockData || {};

MockData.products = [];
MockData.productTypes = ["Structured", "Semi-Structured", "CMS", "Asset", "Impulse"];
MockData.productWorkflowStatus = ["Requested", "Created", "Rework", "Updated", "Approved", "Published", "Archived"];;
MockData.productClasses = [
    {
        label: "Standard",
        groups: [
            {
                label: "Title & Teaser",
                contents: [
                    {label: "Title", defaultValues: [], type: "singleValued"},
                    {label: "Teaser", defaultValues: [], type: "Description"}
                ]
            },
            {
                label: "Feature & Description",
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
            contents: [
                {label: "Title", defaultValues: [], type: "singleValued"},
                {label: "Teaser", defaultValues: [], type: "Description"}
            ]
            },
            {
                label: "Feature & Description",
                contents: [
                    {label: "Feature", defaultValues: [], type: "singleValued"},
                    {label: "Description", defaultValues: [], type: "Description"}
                ]
            },
            {
                label: "Bonus Point",
                contents: [
                    {label: "Bonus Point", defaultValues: [], type: "singleValued"}
                ]
            },
            {
                label: "Logistic Block",
                contents: [
                    {label: "Logistic Block", defaultValues: [], type: "singleValued"}
                ]
            },
            {
                label: "Bonus Point",
                contents: [
                    {label: "Bonus Point", defaultValues: [], type: "singleValued"}
                ]
            },
            {
                label: "Logistic Block",
                contents: [
                    {label: "Logistic Block", defaultValues: [1, 2, 3, 4], type: "optionValued"}
                ]
            },
            {
                label: "Price",
                contents: [
                    {label: "Price", defaultValues: [], type: "singleValued"}
                ]
            },
            {
                label: "Me",
                contents: [
                    {label: "Me", defaultValues: [], type: "singleValued"}
                ]
            },
            {
                label: "Manufacturer",
                contents: [
                    {label: "Manufacturer", defaultValues: [], type: "singleValued"}
                ]
            },
            {
                label: "Conflicting Manufacturer",
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
                contents: [
                    {label: "Zutaten Fur", defaultValues: [], type: "singleValued"}
                ]
            },
            {
                label: "Zubereitungszeit",
                contents: [
                    {label: "Zubereitungszeit", defaultValues: [], type: "singleValued"}
                ]
            },
            {
                label: "Fertig In",
                contents: [
                    {label: "Fertig In", defaultValues: [], type: "singleValued"}
                ]
            },
            {
                label: "Je Portion",
                contents: [
                    {label: "Je Portion", defaultValues: [], type: "singleValued"}
                ]
            },
            {
                label: "Schwierigkeitsgrad",
                contents: [
                    {label: "Schwierigkeitsgrad", defaultValues: [], type: "singleValued"}
                ]
            },
            {
                label: "Kategorian",
                contents: [
                    {label: "Kategorian", defaultValues: [], type: "singleValued"}
                ]
            }
        ]
    }
];