import React from "react";
import PropTypes from "prop-types";

export default class CheckStow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stage: 0,
        }
    }

    render() {
        let goBtn;
        switch (this.state.stage) {
            case 0:
                goBtn = (
                    <button
                        type="button"
                        className="btn btn-danger btn-lg go-btn"
                        onClick={() => this.setState({stage: 1})}
                    >
                        CHECKED
                    </button>
                );
                break;

            case 1:
                goBtn = (
                    <button
                        type="button"
                        className="btn btn-warning btn-lg go-btn"
                        onClick={() => this.setState({stage: 2})}
                    >
                        STOWED
                    </button>
                );
                break;

            case 2:
                goBtn = (
                    <button
                        type="button"
                        className="btn btn-success btn-lg go-btn"
                        onClick={() => this.props.onNext("Deployed ✅")}
                    >
                        GO
                    </button>
                );
                break;

            default:
                goBtn = (
                    <button
                        type="button"
                        className="btn btn-danger btn-lg go-btn"
                        onClick={() => this.props.onNext("✅")}
                    >
                        Checked
                    </button>
                );
                break;
        }


        return (
            <div className="questionContainer">
                <div className="questionItem">
                    <h3 className="prompt">{this.props.item.prompt}</h3>
                    {goBtn}
                </div>
            </div>
        );
    }
}

CheckStow.propTypes = {
    item: PropTypes.object.isRequired,
    onNext: PropTypes.func.isRequired,
};
