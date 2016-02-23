import React, { Component } from 'react';

import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';


let ImageReference = (p) => {
    return (
        <div className="image-reference">
        <CardMedia>
            <img src={p.src} />
        </CardMedia>
        <CardText>
            <h3>{p.caption}</h3>
            <p><a href={p.url}>{p.url}</a></p>
            <p>
                {p.caption}
            </p>
        </CardText>
        </div>);
};

let Aside = (p) => {
    return (<Card>
        <CardHeader title={p.title} />
        { p.text ? <CardText>{p.text}</CardText> : <span />}

        <div className="image-container">
            {p.images.map((img, i) => <ImageReference key={i} src={'./content/' + img.url} caption={img.caption} url={img['external-link']} />)}
        </div>
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