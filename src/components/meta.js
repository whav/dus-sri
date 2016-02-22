import React, { Component } from 'react';

import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';


let ImageReference = (p) => {
    let overlay = <CardTitle title={p.caption} subtitle={<a href={p.url}>{p.url}</a>} />;
    return (
        <CardMedia overlay={overlay}>
            <img src={p.src} />
        </CardMedia>);
};

let Aside = (p) => {
    return (<Card>
        <CardHeader title={p.title} />
        <CardText>
            {p.text}
        </CardText>
        {p.images.map((img, i) => <ImageReference key={i} src={'/content/' + img.url} caption={img.caption} url={img['external-link']} />)}
        </Card>);
};

class Meta extends Component {
    render() {

        return (<div>
            {this.props.items.map((i) => <Aside key={i.id} {...i} />)}
            {/*JSON.stringify(this.props)*/}
        </div>);
    }
}

export default Meta;