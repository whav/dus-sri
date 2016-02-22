import React, { Component } from 'react'

class TOC extends Component {
    render() {
        return (<ul>
            {this.props.chapters.map((c) => <li key={c.id}>{c.title}</li>)}
        </ul>);
    }
}

export default TOC;