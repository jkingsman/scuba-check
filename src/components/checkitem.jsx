import React from "react";
import PropTypes from 'prop-types';

export default class CheckItem extends React.Component {
    constructor(props) {
        super(props);
    }


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
            )
        }

        return (
            <div className="questionContainer">
                <div className="questionItem">
                    <h3 className="prompt">{this.props.message}</h3>
                    {nextBtn}
                </div>
            </div>
        );
    }
}

CheckItem.propTypes = {
    message: PropTypes.string.isRequired,
    onNext: PropTypes.func.isRequired,
    itemsRemaining: PropTypes.number.isRequired,
}
