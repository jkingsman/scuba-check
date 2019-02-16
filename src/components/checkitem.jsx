import React from "react";
import PropTypes from "prop-types";

import { CHECKTYPES } from "app/components/constants";
import GoNoGo from "app/components/checktypes/gonogo";
import Pressure from "app/components/checktypes/pressure";
import CheckStow from "app/components/checktypes/checkstow";
import Final from "app/components/checktypes/final";

export default class CheckItem extends React.Component {
    render() {
        switch (this.props.item.checkType) {
            case CHECKTYPES.GONOGO:
                return (
                    <GoNoGo
                        item={this.props.item}
                        onNext={this.props.onNext}
                    />);

            case CHECKTYPES.PRESSURE:
                return (
                    <Pressure
                        item={this.props.item}
                        onNext={this.props.onNext}
                    />);

            case CHECKTYPES.CHECKSTOW:
                return (
                    <CheckStow
                        item={this.props.item}
                        onNext={this.props.onNext}
                    />);

            case CHECKTYPES.FINAL:
                return (
                    <Final
                        item={this.props.item}
                        checks={this.props.checks}
                    />);

            default:
                console.warning("Warning! The following item has no recognizable check type:"); // eslint-disable-line no-console
                return (
                    <GoNoGo
                        item={this.props.item}
                        onNext={this.props.onNext}
                    />);
        }
    }
}

CheckItem.propTypes = {
    item: PropTypes.object.isRequired,
    checks: PropTypes.array.isRequired,
    onNext: PropTypes.func.isRequired,
};
