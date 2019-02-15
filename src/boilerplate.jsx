import React from "react";
// import CalculatorContainer from "app/calculators/calculator_container";
import CheckItem from "app/components/checkitem";

export default class Boilerplate extends React.Component {
    constructor(props) {
        super(props);
        let checks = [
            "thing 1",
            "thing 2",
            "thing 3"
        ]

        this.state = {
            checks: checks,
        };
    }

    render() {
        /* eslint-disable react/no-unknown-property */
        return (
            <div>
                <div className="container">
                    <CheckItem />
                </div>

            </div>
        );
        /* eslint-enable react/no-unknown-property */
    }
}
