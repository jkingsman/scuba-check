import React from "react";
import PropTypes from "prop-types";

export default class CheckItem extends React.Component {
    render() {
        let nextBtn = null;
        if (this.props.itemsRemaining > 0) {
            nextBtn = (
                <button
                    type="button"
                    className="btn btn-success btn-lg go-btn"
                    onClick={this.props.onNext}
                >
                    GO
                </button>
            );
        }

        return (
            <div className="questionContainer">
                <div className="questionItem">
                    <h3 className="prompt">{this.props.item.prompt}</h3>
                    {nextBtn}
                </div>
            </div>
        );
    }
}

CheckItem.propTypes = {
    item: PropTypes.string.isRequired,
    onNext: PropTypes.func.isRequired,
    itemsRemaining: PropTypes.number.isRequired,
};
