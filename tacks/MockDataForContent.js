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
                    {label: "Title", defaultValues: []},
                    {label: "Teaser", defaultValues: []}
                ]
            },
            {
                label: "Feature & Description",
                content: [
                    {label: "Feature", defaultValues: []},
                    {label: "Description", defaultValues: []}
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
                {label: "Title", defaultValues: []},
                {label: "Teaser", defaultValues: []}
            ]
            },
            {
                label: "Feature & Description",
                content: [
                    {label: "Feature", defaultValues: []},
                    {label: "Description", defaultValues: []}
                ]
            },
            {
                label: "Bonus Point",
                content: [
                    {label: "Bonus Point", defaultValues: []}
                ]
            },
            {
                label: "Logistic Block",
                content: [
                    {label: "Logistic Block", defaultValues: []}
                ]
            },
            {
                label: "Bonus Point",
                content: [
                    {label: "Bonus Point", defaultValues: []}
                ]
            },
            {
                label: "Logistic Block",
                content: [
                    {label: "Logistic Block", defaultValues: [1, 2, 3, 4]}
                ]
            },
            {
                label: "Price",
                content: [
                    {label: "Price", defaultValues: []}
                ]
            },
            {
                label: "Me",
                content: [
                    {label: "Me", defaultValues: []}
                ]
            },
            {
                label: "Manufacturer",
                content: [
                    {label: "Manufacturer", defaultValues: []}
                ]
            },
            {
                label: "Conflicting Manufacturer",
                content: [
                    {label: "Conflicting Manufacturer", defaultValues: []}
                ]
            }
        ]
    },
    {
        label: "Recipes",
        groups: [
            {
                label: "Zutaten Fur",
                content: [
                    {label: "Zutaten Fur", defaultValues: []}
                ]
            },
            {
                label: "Zubereitungszeit",
                content: [
                    {label: "Zubereitungszeit", defaultValues: []}
                ]
            },
            {
                label: "Fertig In",
                content: [
                    {label: "Fertig In", defaultValues: []}
                ]
            },
            {
                label: "Je Portion",
                content: [
                    {label: "Je Portion", defaultValues: []}
                ]
            },
            {
                label: "Schwierigkeitsgrad",
                content: [
                    {label: "Schwierigkeitsgrad", defaultValues: []}
                ]
            },
            {
                label: "Kategorian",
                content: [
                    {label: "Kategorian", defaultValues: []}
                ]
            }
        ]
    }
];