var React = require('react');
var _ = require('lodash');
var SplitButton = require('react-bootstrap').SplitButton;
var MenuItem = require('react-bootstrap').MenuItem;

var ContentBasicInfoFormView = React.createClass({

    //@required: Props
    propTypes: {
        productWorkFlowStatus: React.PropTypes.array.isRequired,
        productTypes: React.PropTypes.array.isRequired,
        productClasses: React.PropTypes.array.isRequired,
        selectedProduct: React.PropTypes.object
    },

    //@handle: workflow change [React UI Component used for workflow]
    handleWorkflowChange: function (index) {
        changeSelectedProductProperty('workflowStatus', this.props.productWorkFlowStatus[index]);
    },

    //@handle: data change for content properties
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

    getSelectOptionsForCLasses: function (items) {
        return _.map(items, function (item, i) {
            return <option key={i}>{item.label}</option>
        });
    },

    getSelectOptionsForTypes: function (items) {
        return _.map(items, function (item, i) {
            return <option key={i}>{item}</option>
        });
    },

    getWorkFlowStatus: function (selectedProduct) {
        //@ThirdParty-component: React component used for workflow
        /*var SplitButton = ReactBootstrap.SplitButton;
        var MenuItem = ReactBootstrap.MenuItem;
*/
        //@internal function @return: Menu Items for Workflow status option
        function renderDropdownButton (item, i) {
            return (
                <MenuItem key={"item" + i} eventKey={i}>{item}</MenuItem>
            );
        }

        return (
            <SplitButton id="pimScreenWorkflow" onSelect={this.handleWorkflowChange} bsSize='xsmall' key='workflow' title={selectedProduct.workflowStatus}>
                {_.map(this.props.productWorkFlowStatus, renderDropdownButton)}
            </SplitButton>
        );
    },

    render: function () {

        //@decide: if no product selected initiate selected product with empty values
        var selectedProduct = this.props.selectedProduct;
        if(selectedProduct == null) {
            selectedProduct = {};
            selectedProduct.label = '';
            selectedProduct.workflowStatus = this.props.productWorkFlowStatus[0];
            selectedProduct.type = '';
            selectedProduct.class = '';
            selectedProduct.comments = '';
        }

        var productWorkFlowStatus = this.getWorkFlowStatus(selectedProduct);
        //var productWorkFlowStatus = this.getSelectOptions(this.props.productWorkFlowStatus);
        var productTypes = this.getSelectOptionsForTypes(this.props.productTypes);
        var productClasses = this.getSelectOptionsForCLasses(this.props.productClasses);

        //@return: actualComponent content
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

module.exports = ContentBasicInfoFormView;