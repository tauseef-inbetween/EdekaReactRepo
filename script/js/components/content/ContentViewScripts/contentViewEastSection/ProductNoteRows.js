var startTime = 0;
var endTime = 0;
var ProductNoteRows = React.createClass({

    propType : {
      item: React.PropTypes.object
    },

    handleChange: function (item, DOMEvent) {
        item.value = DOMEvent.target.value || DOMEvent.target.innerText;
        startTime = new Date().getTime();
        changeNoteContent(this.props.item, item);
    },

    componentDidUpdate: function () {
        console.log('q');
    },

    render: function () {
        var that = this;
        var noteItem = _.map(that.props.item.values, function (item, i) {
            var changeContent = that.handleChange.bind(that, item);
            var content = (item.type == "Description"
                    ? <textarea rows="4"
                                onChange={changeContent}
                                cols="25"
                                value={item.value}
                                className="textArea" />
                    : <input type="text"
                             onChange={changeContent}
                             value={item.value}
                             className="textBox" />
            );
            return (
                <tr key={"item" + i}>
                    <td>
                        <div className="productClassAttributeText">{item.label}:</div>
                        {content}
                    </td>
                </tr>
            );
        });
        return (
            <tbody>{noteItem}</tbody>
        );
    }
});