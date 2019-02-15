import React from "react";
// import CalculatorContainer from "app/calculators/calculator_container";
import CheckItem from "app/components/checkitem";

export default class Boilerplate extends React.Component {
    constructor(props) {
        super(props);
        let checks = [
            "Boots, wetsuit on.",
            "Primary tank full on",
            "BCD inflates",
            "BCD butt dump tightened and secure",
            "BCD inflator bracket tightened",
            "Full pressure inflate test",
            "Hip weights in place and secure",
            "Tank trim in place and secure",
            "STA weight secure and bolted tightly",
            "Whistle deploy and stow",
            "Weights balanced appropriately for pony tanks",
            "Primary tank pressure reads >3200psi",
            "Primary regulator breathes",
            "Primary regulator needle steady",
            "Primary regulator smells good",
            "Pony 1 tank full on",
            "Pony 1 tank pressure reads >2800psi",
            "Pony 1 smells good",
            "Pony 1 regulator breathes",
            "Pony 1 regulator needle steady",
            "Pony 1 regulator stowed tightly on correct side",
            "Pony 2 tank full on",
            "Pony 2 tank pressure reads >2800psi",
            "Pony 2 smells good",
            "Pony 2 regulator breathes",
            "Pony 2 regulator needle steady",
            "Pony 2 regulator stowed tightly on correct side",
            "Don gear",
            "Pony 1 on left side",
            "Pony 2 on right side",
            "Waist strap tightened and stowed",
            "Shears centerline",
            "Deploy and stow shears",
            "Primary light deploy and stow",
            "Backup light deploy and stow",
            "Mask and spare mask around neck",
            "Primary computer powers on and is secure",
            "Backup computer powers on and is secure",
            "Backup compass is secure",
            "dSMB and reel secure",
            "Slate secure and erased",
            "Deco plan on slate, if applicable",
            "Deploy longhose",
            "Perform valve drill",
            "Stow key, stash phone, don gloves, bring fins. Dive safe."
        ]

        this.state = {
            checks: checks,
            currentCheck: 0,
        };

        this.nextItem = this.nextItem.bind(this);
    }

    nextItem () {
        this.setState({currentCheck: this.state.currentCheck + 1})
    }

    render() {
        /* eslint-disable react/no-unknown-property */
        return (<CheckItem
                message={this.state.checks[this.state.currentCheck]}
                onNext={this.nextItem}
                itemsRemaining={this.state.checks.length - this.state.currentCheck - 1}
                />);
        /* eslint-enable react/no-unknown-property */
    }
}
