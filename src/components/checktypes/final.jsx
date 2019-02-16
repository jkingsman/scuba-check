import React from "react";
import PropTypes from "prop-types";

import { CHECKTYPES } from "app/components/constants";

export default class Final extends React.Component {
    render() {
        let checkSummary = [];
        let lastCategory;
        this.props.checks.forEach(function(check){
            if (check.checkType === CHECKTYPES.FINAL){
                return;
            }

            if (check.category !== lastCategory){
                checkSummary.push(<span><strong>{check.category}</strong><br /></span>);
                lastCategory = check.category;
            }

            checkSummary.push(<span><span>{check.prompt}</span><span className="checkResult">{check.result}</span><br /></span>)
        });

        return (
            <div>
                <h3 className="prompt">{this.props.item.prompt}</h3>
                <hr />
                <div className="finalContainer">
                    {checkSummary}
                </div>
            </div>
        );
    }
}

Final.propTypes = {
    item: PropTypes.object.isRequired,
    checks: PropTypes.array.isRequired,
};
