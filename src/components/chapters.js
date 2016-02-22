import React, { Component } from 'react'
import RaisedButton from 'material-ui/lib/raised-button';
import AvPlayArrow from 'material-ui/lib/svg-icons/av/play-arrow';


const style = {
  margin: 12,
};


function ChapterLink (props) {
    let icon = null,
        start = Math.floor(props.start / 60) + ':' + (props.start % 60),
        end = Math.floor(props.end / 60) + ':' + (props.end % 60),
        title = props.title + '(' + start + ' - '+ end + ')';

    if (!props.active) {
        icon = <AvPlayArrow />;
    };
    return <RaisedButton label={title} primary={props.active} secondary={!props.active} style={style} icon={icon} onClick={(e) => props.handleTimestamp(props.start)} />;
};

class TOC extends Component {
    render() {
        return (<div>
            <h3>Chapters</h3>
                {
                    this.props.chapters.map((c) => <ChapterLink key={c.id} {...c} handleTimestamp={this.props.handleTimestamp} />)
                }
        </div>);
    }
}

export default TOC;