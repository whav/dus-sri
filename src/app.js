/**
 * Created by sean on 12/02/16.
 */
import React, { Component } from 'react'
import Video from './components/video';
import TOC from './components/chapters';
import Footer from './components/footer';
import Meta from './components/meta';

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
        if (!this.state.paused){
            this.togglePlay();
        }
    }

    play() {
        if (this.state.paused) {
            this.togglePlay()
        }
    }

    togglePlay() {
        this.setState({paused: !this.state.paused});
    }

    //shouldComponentUpdate(nextProps, nextState){
    //    // pausing / unpausing the video always propagates
    //    if (this.state.paused != nextState.paused) {
    //        return true;
    //    }
    //
    //    if (this.state.timestamp != nextState.timestamp){
    //        return true;
    //    }
    //    // this has to be solved by immutable.js or similar
    //    let ct = this.state.currentTime || 0;
    //    if (Math.floor(this._last_checked_ts) === Math.floor(ct)) {
    //        console.warn('Not re-rendering');
    //        return false;
    //    }
    //    return true;
    //}

    setTimestamp(ts) {
        console.log(ts);
        let new_state = {
            timestamp: ts
        };
        if (this.state.paused) {
            new_state.paused = false;
        }
        this.setState(new_state);
    }

    render() {
        let ts = this.state.currentTime || 0,
            chapters = this.set_active_flags(ts, this.props.chapters),
            asides = this.set_active_flags(ts, this.props.aside),
            active_asides = asides.filter((i) => i.active === true);

        // this is not side-effect free!
        this._last_checked_ts = ts;

        return (<div className="videodemo">
        <main className="panels">
            <div>
                <Video sources={this.props.sources}
                       paused={this.state.paused}
                       handleProgress={this.handleProgress.bind(this)}
                       handleToggle={this.togglePlay.bind(this)}
                       timestamp={this.state.timestamp || false} />
                <TOC chapters={chapters} handleTimestamp={this.setTimestamp.bind(this)}/>
            </div>
            {/*onMouseEnter={this.pause.bind(this)} onMouseLeave={this.play.bind(this)}*/}
            <div>
                <Meta items={active_asides} setTime={this.setTimestamp.bind(this)} />
            </div>
        </main>
        <Footer handleToggle={this.togglePlay.bind(this)} paused={this.state.paused} progress={this.state.progress || 0} />
        </div>);
    }
}
