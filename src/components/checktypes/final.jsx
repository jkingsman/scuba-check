import React from "react";
import PropTypes from "prop-types";
import domtoimage from 'dom-to-image';

import {
    CHECKTYPES
} from "app/components/constants";

export default class Final extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgBlob: null,
        }
        this.listRef = React.createRef();
    }

    componentDidMount() {
        domtoimage.toPng(this.listRef.current)
            .then(function(dataUrl) {
                // var img = new Image();
                // img.src = dataUrl;
                // document.body.appendChild(img);
                this.setState({imgBlob: dataUrl})
            }.bind(this));
    }

    render() {
        let checkSummary = [];
        let lastCategory;
        this.props.checks.forEach(function(check) {
            if (check.checkType === CHECKTYPES.FINAL) {
                return;
            }

            if (check.category !== lastCategory) {
                checkSummary.push(<span><strong>{check.category}</strong><br /></span>);
                lastCategory = check.category;
            }

            checkSummary.push(<span><span>{check.prompt}</span><span className="checkResult">{check.result}</span><br /></span>)
        });

        return (
            <div className="lastPage" ref={this.listRef}>
                <h3 className="prompt">{this.props.item.prompt}</h3>
                <hr />
                <div className="finalContainer">
                    Check complete at {new Date().toLocaleString()}
                    <br />
                    {checkSummary}
                </div>
                {!this.state.imgBlob ? null : (<div><br /><br /><hr /><h3>Image Duplicate</h3><img src={this.state.imgBlob} /></div>)}
            </div>
        );
    }
}

Final.propTypes = {
    item: PropTypes.object.isRequired,
    checks: PropTypes.array.isRequired,
};
