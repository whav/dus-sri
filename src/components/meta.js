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
            <p>
                {p.caption}
            </p>
            <p>
                <a href={p.url}>{p.url}</a>
            </p>
        </CardText>
        </div>);
};

let Aside = (p) => {
    let images = p.images || [];
    return (<Card>
        <CardHeader title={p.title} />
        { p.text ? <CardText>{p.text}</CardText> : <span />}

        <div className="image-container">
            {images.map((img, i) => <ImageReference key={i} src={'./content/' + img.url} caption={img.caption} url={img['external-link']} />)}
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
