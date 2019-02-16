import React from "react";
import PropTypes from "prop-types";

export default class GoNoGo extends React.Component {
    render() {
        return (
            <div className="questionContainer">
                <div className="questionItem">
                    <h3 className="prompt">{this.props.item.prompt}</h3>
                    <button
                        type="button"
                        className="btn btn-success btn-lg go-btn"
                        onClick={() => this.props.onNext("✅")}
                    >
                        GO
                    </button>
                </div>
            </div>
        );
    }
}

GoNoGo.propTypes = {
    item: PropTypes.object.isRequired,
    onNext: PropTypes.func.isRequired,
};
