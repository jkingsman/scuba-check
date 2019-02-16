import React from "react";
import PropTypes from "prop-types";

export default class StatusBar extends React.Component {
    render() {
        return (
            <div className="statusBar">
                <strong>{this.props.category}</strong> (<a
                    href="#"
                    onClick={this.props.skipCategoryFunc}
                >
                    Skip
                </a>)
                <br />
                {this.props.onItem + 1} / {this.props.totalItems}
            </div>
        );
    }
}

StatusBar.propTypes = {
    onItem: PropTypes.number.isRequired,
    totalItems: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    skipCategoryFunc: PropTypes.func.isRequired,
};
