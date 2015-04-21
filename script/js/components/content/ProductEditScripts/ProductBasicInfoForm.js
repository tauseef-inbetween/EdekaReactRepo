var ProductBasicInfoForm = React.createClass({
    handleChange (DOMEvent) {
        var targetId = DOMEvent.currentTarget.id;
        var targetValue = DOMEvent.target.value;
        if(targetId == 'pimScreenProductName') {
            changeSelectedProduct('label', targetValue);
        } else if(targetId == 'pimScreenType') {
            changeSelectedProduct('type', targetValue);
        } else if(targetId == 'pimScreenWorkflow') {
            changeSelectedProduct('workflowStatus', targetValue);
        } else if(targetId == 'pimScreenClasses') {
            changeSelectedProduct('class', targetValue);
        } else if(targetId == 'pimScreenComments') {
            changeSelectedProduct('comments', targetValue);
        }
    },

    render: function () {
        var productWorkFlowStatus = _.map(this.props.productWorkFlowStatus, function(item, i){
            return <option key={i}>{item}</option>;
        });

        var productTypes = _.map(this.props.productTypes, function (item, i) {
            return <option key={i}>{item}</option>
        });

        var productClasses = _.map(this.props.productClasses, function (item, i) {
            return <option key={i}>{item}</option>
        });

        var selectedProduct = this.props.selectedProduct;

        if(selectedProduct == null) {
            selectedProduct = {};
            selectedProduct.label = '';
            selectedProduct.workflowStatus = '';
            selectedProduct.type = '';
            selectedProduct.class = '';
            selectedProduct.comments = '';
        }

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
                               onChange={this.handleChange}/>
                    </div>
                </div>

                <div className="pimScreenFormSection">
                    <div className="pimScreenFormSectionAttribute">Type* :</div>
                    <div className="pimScreenFormSectionInputWrapper">
                        <select id="pimScreenType"
                                className="pimScreenWizardFormInput pimScreenWizardInput"
                                value={selectedProduct.type}
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
                                value={selectedProduct.workflowStatus}
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
                                value={selectedProduct.class}
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
                                  onChange={this.handleChange}></textarea>
                    </div>
                </div>
            </div>
        </div>
        );
    }
});