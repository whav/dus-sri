import React, { Component } from 'react'
import RaisedButton from 'material-ui/lib/raised-button';
import AvPlayArrow from 'material-ui/lib/svg-icons/av/play-arrow';
import AvPause from 'material-ui/lib/svg-icons/av/pause';


const style = {
  margin: 12,
};


class ChapterLink extends Component {
    handleClick(e) {
        if (this.props.active) {
            if (!this.props.paused) {
                this.props.handlePause();
            } else {
                this.props.handlePlay();
            }
        } else {
            this.props.handleTimestamp(this.props.start);
        }
    }

    render(){
        let props = this.props;

        let icon = null,
            start = Math.floor(props.start / 60) + ':' + (props.start % 60),
            end = Math.floor(props.end / 60) + ':' + (props.end % 60),
            title = props.title + '(' + start + ' - '+ end + ')';

        if (!props.active || props.paused) {
            icon = <AvPlayArrow />;
        } else {
            icon = <AvPause />;
        };
        return <RaisedButton label={title} primary={props.active}
                             secondary={!props.active}
                             style={style}
                             icon={icon}
                             onClick={this.handleClick.bind(this)} />;
    }
};

class TOC extends Component {
    render() {
        return (<div>
            <h3>Chapters</h3>
                {
                    this.props.chapters.map(
                        (c) => <ChapterLink
                            key={c.id}
                            {...c}
                            handleTimestamp={this.props.handleTimestamp}
                            handlePause={this.props.handlePause}
                            handlePlay={this.props.handlePlay}
                            paused={this.props.paused}
                        />)
                }
        </div>);
    }
}

export default TOC;