var PIMThumbImage = React.createClass({
    render: function () {
        return (
            <div className="PIMThumbImage">
                <img src={this.props.imagSRC}></img>
            </div>
        )
    }
});

var PIMScrollDiv = React.createClass({
    render: function () {
        var product = this.props.product;
        return (
            <div id="PIMViewScrollDiv">
                <div className="PIMThumbName">
                    <div className="PIMThumbLabel">{product.id} | {product.title}</div>
                </div>
                <div className="PIMThumbTitle">Title: {product.title}</div>
                <div className="PIMThumbTag" data-title=""></div>
            </div>
        )
    }
});
var PimThumbView = React.createClass({
    render: function () {

        return (
            <div className="pimThumbView" onClick={this.props.onProductClick}>
                <PIMThumbImage imagSRC={this.props.product.image[0]}/>
                <PIMScrollDiv product={this.props.product}/>
            </div>
        )
    }
});