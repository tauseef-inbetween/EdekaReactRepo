var startTime = 0;
var endTime = 0;
var ProductNoteRows = React.createClass({

    propType: {
        item: React.PropTypes.object
    },

    handleChange: function (item, DOMEvent) {

        //#Rethink #LogicFlow [Unwanted looping for searching of notes for every key hit]

        item.value = DOMEvent.target.value || DOMEvent.target.innerText;
        startTime = new Date().getTime();
        changeNoteContent(this.props.item, item);
    },

    render: function () {
        var that = this;
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
                    content = (
                        <select className="selectNote" onChange={changeContent}
                                value={item.value.length > 0 ? item.value : item.defaultValues[0]}>
                            {_.map(item.defaultValues, function (value) {
                                return (<option>{value}</option>)
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