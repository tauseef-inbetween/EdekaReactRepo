var ProductBasicInfoForm = React.createClass({
    getInitialState: function () {
       return {
           label: '',
           type: '',
           workflowStatus: '',
           class: '',
           comments: '',

           productWorkFlowStatus : [],
           productTypes : [],
           productClasses: []
       }
    },

    listStateChanged: function () {
        var selectedProduct = this.props.selectedProduct;
        if(selectedProduct != null ) {
            this.setState({
                label: selectedProduct.label,
                type: selectedProduct.type,
                workflowStatus: selectedProduct.workflowStatus,
                class: selectedProduct.class,
                comments: selectedProduct.comments
            });
        }
    },

    componentWillReceiveProps: function(nextProps) {
        this.props = nextProps;
        this.listStateChanged();
    },

    componentWillMount: function () {
      this.setState({
          productWorkFlowStatus: this.props.productWorkFlowStatus,
          productTypes: this.props.productTypes,
          productClasses: this.props.productClasses
      });
    },

    handleChange (DOMEvent) {
        var targetId = DOMEvent.currentTarget.id;
        var targetValue = DOMEvent.target.value;
        if(targetId == 'pimScreenProductName') {
            this.setState({label : targetValue});
        } else if(targetId == 'pimScreenType') {
            this.setState({type : targetValue});
        } else if(targetId == 'pimScreenWorkflow') {
            this.setState({workflowStatus : targetValue});
        } else if(targetId == 'pimScreenClasses') {
            this.setState({class : targetValue});
        } else if(targetId == 'pimScreenComments') {
            this.setState({comments : targetValue});
        }
    },

    render: function () {
        var productWorkFlowStatus = this.state.productWorkFlowStatus.map(function(item, i){
            return <option key={i}>{item}</option>;
        });

        var productTypes = this.state.productTypes.map(function (item, i) {
            return <option key={i}>{item}</option>
        });

        var productClasses = this.state.productClasses.map(function (item, i) {
            return <option key={i}>{item}</option>
        });
        return (
        <div id="pimDetailWrapper">

            <div id="pimScreenBasicRightHeader">Basic</div>

            <div id="pimScreenBasicContainer">

                <div className="pimScreenFormSection">
                    <div className="pimScreenFormSectionAttribute">Name* :</div>
                    <div className="pimScreenFormSectionInputWrapper">
                        <input id="pimScreenProductName" className="pimScreenWizardFormInput" type="text"
                               name="name" required=""
                               value={this.state.label}
                               onChange={this.handleChange}/>
                    </div>
                </div>

                <div className="pimScreenFormSection">
                    <div className="pimScreenFormSectionAttribute">Type* :</div>
                    <div className="pimScreenFormSectionInputWrapper">
                        <select id="pimScreenType"
                                className="pimScreenWizardFormInput pimScreenWizardInput"
                                value={this.state.type}
                                onChange={this.handleChange}>
                            {productTypes}
                        </select>
                    </div>
                </div>

                <div className="pimScreenFormSection">
                    <div className="pimScreenFormSectionAttribute">Workflow Status* :</div>
                    <div className="pimScreenFormSectionInputWrapper">
                        <select id="pimScreenWorkflow"
                                className="pimScreenWizardFormInput pimScreenWizardInput"
                                defaultValue="Created"
                                value={this.state.workflowStatus}
                                onChange={this.handleChange}>
                            {productWorkFlowStatus}
                        </select>
                    </div>
                </div>

                <div className="pimScreenFormSection">
                    <div className="pimScreenFormSectionAttribute">Class* :</div>
                    <div className="pimScreenFormSectionInputWrapper">
                        <select id="pimScreenClasses"
                                className="pimScreenWizardFormInput pimScreenWizardInput"
                                value={this.state.class}
                                onChange={this.handleChange}>
                            {productClasses}
                        </select>
                    </div>
                </div>

                <div className="pimScreenFormSection">
                    <div className="pimScreenFormSectionAttribute">Comments :</div>
                    <div className="pimScreenFormSectionInputWrapper">
                        <textarea id="pimScreenComments" className="textArea"
                                  required=""
                                  value={this.state.comments}
                                  onChange={this.handleChange}></textarea>
                    </div>
                </div>
            </div>
        </div>
        );
    }
});