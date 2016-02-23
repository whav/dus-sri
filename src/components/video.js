/**
 * Created by sean on 18/02/16.
 */
import React, { Component } from 'react'

 class Video extends Component {

    constructor(props) {
        super(props)
    }

    handleDuration(e) {
        console.log("Duration", e);
    }

    componentWillReceiveProps(new_props) {
        if (this.props.paused != new_props.paused){
            if (new_props.paused) {
                this._video.pause();
            } else {
                this._video.play();
            }
        }
        if (new_props.timestamp) {
            console.log('Settings timestamp', new_props.timestamp, this._video);
            this._video.currentTime = new_props.timestamp;
        }
    }

    handleToggle(e) {
        e.preventDefault()
        if ((e.type === 'pause' && this.props.paused) || (e.type === 'play' && !this.props.paused)) {
            return;
        }
        this.props.handleToggle();
    }

    handleProgress(e) {
        let progress = 0,
            ct = this._video.currentTime,
            duration = this._video.duration;

        if (duration > 0) {
            progress = ct / duration;
        }

        this.props.handleProgress({
            progress: progress,
            currentTime: ct,
            duration: duration
        });
    }

    render() {
        return (<video ref={(el) => this._video=el}
                       onPause={this.handleToggle.bind(this)}
                       onPlay={this.handleToggle.bind(this)}
                       onTimeUpdate={this.handleProgress.bind(this)}
                       autoPlay
                       controls>
            {
                this.props.sources.map((s) => <source key={s} src={s} type="video/mp4" />)
            }
        </video>);
    }
}


Video.propTypes = {
    sources: React.PropTypes.array
}

export default Video;
