var React = require('react');
var _ = require('lodash');
var ContentAction = require('../../../screen/contentScreen/ContentAction.js');

var NoteRow = React.createClass({

    //@required: Props
    propType: {
        item: React.PropTypes.object,
        selectedProductClass: React.PropTypes.string,
        productClasses: React.PropTypes.array
    },

    //@handle: change of note content
    handleChange: function (item, DOMEvent) {
        item.value = DOMEvent.target.value || DOMEvent.target.innerText;
        ContentAction.changeNoteContent(this.props.item, item);
    },

    getNoteItems: function () {
        var that = this;
        //@assign: get class group object from selected product class
        var selectedClassGroups = _.result(_.find(that.props.productClasses, 'label', that.props.item.groupName), 'groups');

        return _.map(that.props.item.values, function (item, i) {
                //@bind: change of note content with note{item}
                var changeContent = that.handleChange.bind(that, item);

                var content = '';
                //@decide: content type based on item type [textArea, textBox, Option]
                if (item.type == "Description") {

                    content = ( <textarea rows="4"
                                          onChange={changeContent}
                                          cols="25"
                                          value={item.value}
                                          className="textArea"/>
                    );

                } else if (item.type == "optionValued") {

                    //@assign: default options in case of optional valued field
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
                //@return: each value in a group to variable {noteItem}
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
    },

    render: function () {
        //@assign: note item row based on the group
        var noteItem = this.getNoteItems();

        //@return: actual component content
        return (
            <tbody>{noteItem}</tbody>
        );
    }
});

module.exports = NoteRow;