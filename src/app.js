/**
 * Created by sean on 12/02/16.
 */
import React, { Component } from 'react'
import Video from './components/video';
import TOC from './components/chapters';
import Footer from './components/footer';
import Meta from './components/meta';
import classnames from 'classnames';

require('./demo.css');

export class VideoDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: 0,
            paused: true
        };
        this._last_checked_ts = 0;
    }

    handleProgress(params) {
        this.setState({...params});
    }

    set_active_flags(timestamp, items) {
        let current_items = items.map((i) => {
            let is_active = (i.start <= timestamp) && (timestamp <= i.end);
            return Object.assign({}, i, {active: is_active})
        });
        return current_items;
    }

    pause() {
        console.log('pausing');
        if (!this.state.paused){
            this.togglePlay();
        }
    }

    play() {
        console.log('playing');
        if (this.state.paused) {
            this.togglePlay()
        }
    }

    togglePlay() {
        this.setState({paused: !this.state.paused});
    }

    setTimestamp(ts) {
        let new_state = {
            timestamp: ts
        };
        if (this.state.paused) {
            new_state.paused = false;
        }
        console.log(new_state);
        this.setState(new_state);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.timestamp){
            this.setState({timestamp: false});
        }
    }


    render() {
        let ts = this.state.currentTime || 0,
            chapters = this.set_active_flags(ts, this.props.chapters),
            asides = this.set_active_flags(ts, this.props.aside),
            active_asides = asides.filter((i) => i.active === true);

        // this is not side-effect free!
        this._last_checked_ts = ts;
        let cn = classnames({paused: this.state.paused}),
            cn_aside = classnames({paused: !this.state.paused}, 'aside');

        return (<div className="videodemo">
        <main className="panels">
            <div className={cn} onClick={this.play.bind(this)}>
                <Video sources={this.props.sources}
                       paused={this.state.paused}
                       handleProgress={this.handleProgress.bind(this)}
                       handleToggle={this.togglePlay.bind(this)}
                       timestamp={this.state.timestamp || false} />
                <TOC chapters={chapters}
                     handleTimestamp={this.setTimestamp.bind(this)}
                     handlePause={this.pause.bind(this)}
                     handlePlay={this.play.bind(this)}
                     paused={this.state.paused} />
            </div>

            <div onClick={this.pause.bind(this)} className={cn_aside}>
                <Meta items={active_asides}
                      setTime={this.setTimestamp.bind(this)}
                      />
            </div>
        </main>
        <Footer handleToggle={this.togglePlay.bind(this)} paused={this.state.paused} progress={this.state.progress || 0} />
        </div>);
    }
}
