import React from "react";
import PropTypes from "prop-types";

export default class StatusBar extends React.Component {
    render() {
        let skipBtn;
        if (this.props.onItem < this.props.totalItems - 1) {
            skipBtn = (
                <span>
                    (
                    <a
                        href="#"
                        onClick={this.props.skipCategoryFunc}
                    >
                        Skip
                    </a>
                    )
                </span>
            );
        }

        let progress;
        if (this.props.onItem + 1 < this.props.totalItems) {
            progress = (<span>{this.props.onItem + 1} / {this.props.totalItems}</span>);
        }

        return (
            <div className="statusBar">
                <strong>{this.props.category}</strong> {skipBtn}
                <br />
                {progress}
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
