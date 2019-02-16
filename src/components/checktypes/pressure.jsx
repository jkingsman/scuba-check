import React from "react";
import PropTypes from "prop-types";

export default class Pressure extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pressure: "",
        }

        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount() {
        this.pressureInput.focus();
    }

    handleKeyPress (e) {
        if (e.key === 'Enter' && this.state.pressure >= this.props.item.pressure) {
            this.props.onNext(`${this.state.pressure}psi ✅`);
        }
    }

    render() {
        let goBtn;
        if (this.state.pressure < this.props.item.pressure) {
            goBtn = <span className="go-btn">Pressure too low!</span>;
        } else {
            goBtn = (
                <button
                    type="button"
                    className="btn btn-success btn-lg go-btn"
                    onClick={() => this.props.onNext(`${this.state.pressure}psi ✅`)}
                >
                    GO
                </button>
            );
        }

        return (
            <div className="questionContainer">
                <div className="questionItem">
                    <h3 className="prompt">{this.props.item.prompt}</h3>
                    <input
                        ref={(input) => { this.pressureInput = input; }}
                        type="number"
                        value={this.state.pressure}
                        onChange={(event) => this.setState({pressure: event.target.value})}
                        onKeyPress={this.handleKeyPress}
                    />
                    {goBtn}
                </div>
            </div>
        );
    }
}

Pressure.propTypes = {
    item: PropTypes.object.isRequired,
    onNext: PropTypes.func.isRequired,
};
