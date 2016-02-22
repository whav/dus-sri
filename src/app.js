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
    }

    handleProgress(params) {
        this.setState({...params});
    }

    togglePlay() {
        console.log('toggling play');
        this.setState({paused: !this.state.paused});
    }

    setTimestamp(ts) {
        this.setState({
            timestamp: ts
        });
    }

    render() {
        let sources = ["./video/dussri.mp4"];
        return (<div className="videodemo">
        <main className="panels">
            <div>
                <Video sources={this.props.sources}
                       paused={this.state.paused}
                       handleProgress={this.handleProgress.bind(this)}
                       handleToggle={this.togglePlay.bind(this)}
                       timestamp={this.state.timestamp || false} />
                <TOC chapters={this.props.chapters} />
            </div>
            {/*<div onMouseEnter={this.togglePlay.bind(this)} onMouseLeave={this.togglePlay.bind(this)} >
                <Meta {...this.state} items={this.props.aside} />
            </div>*/}
        </main>
        <Footer handleToggle={this.togglePlay.bind(this)} paused={this.state.paused} progress={this.state.progress || 0} />
        </div>);
    }
}
