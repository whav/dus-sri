import React, { Component } from 'react';
import IFrame from 'react-iframe';

class Meta extends Component {
    render() {
        let items = this.props.items,
            current_ts = this.props.currentTime;

        items = items.filter((x) => {
            return (x.start <= current_ts) && (current_ts <= x.end)
        });

        let m = null;
        if (items.length > 0) {
            var src = items[0].links[0];
            m = <div><IFrame url={src + '#main'} width={"1042px"}/></div>;
        }

        return (<div>
            {/*{JSON.stringify(this.props)}*/}
            <hr />
            {/*{JSON.stringify(items)}*/}
            {m}
        </div>);
    }
}

export default Meta;