import React, { Component } from 'react';

class Meta extends Component {
    render() {

        return (<div>
            {JSON.stringify(this.props)}
        </div>);
    }
}

export default Meta;