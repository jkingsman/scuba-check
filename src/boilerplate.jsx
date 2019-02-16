import React from "react";
import CheckItem from "app/components/checkitem";
import StatusBar from "app/components/statusbar";
import checks from "app/components/checks";

export default class Boilerplate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checks: checks,
            currentCheck: 0,
        };

        this.nextItem = this.nextItem.bind(this);
        this.skipCategory = this.skipCategory.bind(this);
    }

    setItem(itemIdx) {
        this.setState({
            currentCheck: itemIdx,
        });
    }

    nextItem() {
        this.setItem(this.state.currentCheck + 1);
    }

    skipCategory() {
        let currentCategory = this.state.checks[this.state.currentCheck].category;
        let currentIdx = this.state.currentCheck;

        while (this.state.checks[currentIdx].category === currentCategory) {
            currentIdx++;
        }

        this.setItem(currentIdx);
    }

    render() {
        return (
            <div className="masterContainer">
                <StatusBar
                    onItem={this.state.currentCheck}
                    totalItems={this.state.checks.length}
                    category={this.state.checks[this.state.currentCheck].category}
                    skipCategoryFunc={this.skipCategory}
                />
                <CheckItem
                    item={this.state.checks[this.state.currentCheck]}
                    onNext={this.nextItem}
                    itemsRemaining={this.state.checks.length - this.state.currentCheck - 1}
                />
            </div>
        );
    }
}
