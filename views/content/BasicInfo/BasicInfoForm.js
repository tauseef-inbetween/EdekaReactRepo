var ProductBasicInfoForm = React.createClass({

    propTypes: {
        productWorkFlowStatus: React.PropTypes.array.isRequired,
        productTypes: React.PropTypes.array.isRequired,
        productClasses: React.PropTypes.array.isRequired,
        selectedProduct: React.PropTypes.object
    },

    handleWorkflowChange: function (index) {
        changeSelectedProductProperty('workflowStatus', this.props.productWorkFlowStatus[index]);
    },

    handleChange: function (DOMEvent) {
        var targetId = DOMEvent.currentTarget.id;
        var targetValue = DOMEvent.target.value || DOMEvent.target.innerText;
        if(targetId == 'pimScreenProductName') {
            changeSelectedProductProperty('label', targetValue);
        } else if(targetId == 'pimScreenType') {
            changeSelectedProductProperty('type', targetValue);
        } else if(targetId == 'pimScreenWorkflow') {
            changeSelectedProductProperty('workflowStatus', targetValue);
        } else if(targetId == 'pimScreenClasses') {
            changeSelectedProductProperty('class', targetValue);
        } else if(targetId == 'pimScreenComments') {
            changeSelectedProductProperty('comments', targetValue);
        }
    },



    render: function () {

        var SplitButton = ReactBootstrap.SplitButton;
        var MenuItem = ReactBootstrap.MenuItem;

        var selectedProduct = this.props.selectedProduct;

        if(selectedProduct == null) {
            selectedProduct = {};
            selectedProduct.label = '';
            selectedProduct.workflowStatus = this.props.productWorkFlowStatus[0];
            selectedProduct.type = '';
            selectedProduct.class = '';
            selectedProduct.comments = '';
        }

        function renderDropdownButton (item, i) {
            return (
                    <MenuItem key={"item" + i} eventKey={i}>{item}</MenuItem>
            );
        }

        const productWorkFlowStatus = (
                <SplitButton id="pimScreenWorkflow" onSelect={this.handleWorkflowChange} bsSize='xsmall' key='workflow' title={selectedProduct.workflowStatus}>
                    {_.map(this.props.productWorkFlowStatus, renderDropdownButton)}
                </SplitButton>
        );

        /*var productWorkFlowStatus = _.map(this.props.productWorkFlowStatus, function(item, i){
            return <option key={i}>{item}</option>;
        });*/

        var productTypes = _.map(this.props.productTypes, function (item, i) {
            return <option key={i}>{item}</option>
        });

        var productClasses = _.map(this.props.productClasses, function (item, i) {
            return <option key={i}>{item.label}</option>
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
                               value={selectedProduct.label}
                               tabIndex="-1"
                               onChange={this.handleChange}/>
                    </div>
                </div>

                <div className="pimScreenFormSection">
                    <div className="pimScreenFormSectionAttribute">Type* :</div>
                    <div className="pimScreenFormSectionInputWrapper">
                        <select id="pimScreenType"
                                className="pimScreenWizardFormInput pimScreenWizardInput"
                                value={selectedProduct.type}
                                tabIndex="-1"
                                onChange={this.handleChange}>
                            {productTypes}
                        </select>
                    </div>
                </div>

                <div className="pimScreenFormSection">
                    <div className="pimScreenFormSectionAttribute">Workflow Status* :</div>
                    <div className="pimScreenFormSectionInputWrapper">
                        {productWorkFlowStatus}
                    </div>
                </div>

                <div className="pimScreenFormSection">
                    <div className="pimScreenFormSectionAttribute">Class* :</div>
                    <div className="pimScreenFormSectionInputWrapper">
                        <select id="pimScreenClasses"
                                className="pimScreenWizardFormInput pimScreenWizardInput"
                                value={selectedProduct.class}
                                tabIndex="-1"
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
                                  value={selectedProduct.comments}
                                  tabIndex="-1"
                                  onChange={this.handleChange}></textarea>
                    </div>
                </div>
            </div>
        </div>
        );
    }
});