/**
 * Created by sean on 18/02/16.
 */
import React, { Component } from 'react'

import LinearProgress from 'material-ui/lib/linear-progress';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import AvPlayArrow from 'material-ui/lib/svg-icons/av/play-arrow';
import AvPause from 'material-ui/lib/svg-icons/av/pause';

class Footer extends Component {
    render() {
        let button_icon = <AvPause />;
        if (this.props.paused) {
            button_icon = <AvPlayArrow />;
        };
        let progress = this.props.progress * 100;
        let progress_style = {
            position: 'fixed',
            bottom: 0
        };
        return (<footer>
            <FloatingActionButton secondary={true} onClick={this.props.handleToggle}>
                {button_icon}
            </FloatingActionButton>
            <LinearProgress mode="determinate" value={progress} style={progress_style}/>

        </footer>);
    }
}

export default Footer;