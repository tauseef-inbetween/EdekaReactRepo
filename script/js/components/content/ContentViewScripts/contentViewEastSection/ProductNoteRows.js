var startTime = 0;
var endTime = 0;
var ProductNoteRows = React.createClass({

    propType: {
        item: React.PropTypes.object,
        selectedProductClass: React.PropTypes.string,
        productClasses: React.PropTypes.array
    },

    handleChange: function (item, DOMEvent) {

        //#Rethink #LogicFlow [Unwanted looping for searching of notes for every key hit]

        item.value = DOMEvent.target.value || DOMEvent.target.innerText;
        startTime = new Date().getTime();
        changeNoteContent(this.props.item, item);
    },

    render: function () {
        var that = this;

        var selectedClassGroups = _.result(_.find(that.props.productClasses, 'label', that.props.selectedProductClass), 'groups');
        var noteItem = _.map(that.props.item.values, function (item, i) {
                var changeContent = that.handleChange.bind(that, item);
                var content = '';
                if (item.type == "Description") {
                    content = ( <textarea rows="4"
                                          onChange={changeContent}
                                          cols="25"
                                          value={item.value}
                                          className="textArea"/>);
                } else if (item.type == "optionValued") {
                    var selectedNoteFromMock = _.result(_.find(selectedClassGroups, 'label', that.props.item.type), 'contents');
                    var defaultValuesOfMock = _.result(_.find(selectedNoteFromMock, 'label', item.label), 'defaultValues');
                    content = (
                        <select className="selectNote" onChange={changeContent}
                                value={item.value.length > 0 ? item.value : defaultValuesOfMock[0]}>
                            {_.map(defaultValuesOfMock, function (value, i) {
                                return (<option key={"value" + i}>{value}</option>)
                            })}
                        </select>
                    );
                } else {
                    content = (<input type="text"
                                      onChange={changeContent}
                                      value={item.value}
                                      className="textBox"/>);
                }
                return (
                    <tr key={"item" + i}>
                        <td>
                            <div className="productClassAttributeText">{item.label}:</div>
                            {content}
                        </td>
                    </tr>
                );
            }
        );
        return (
            <tbody>{noteItem}</tbody>
        );
    }
});