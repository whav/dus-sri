/**
 * Created by sean on 12/02/16.
 */

import React, { Component } from 'react'
import { render } from 'react-dom'
import { VideoDemo } from './app'

let rootElement = document.getElementById('react-container');

const data = require('../content/dus_sri-concordance.json'),
    sources = ['../content/dus_sri_recut.mp4'];

let _chapters = data.chapter || [],
    _aside = data.aside || [];


// parse chapters and aside and assign some ids to them (to be used in for jsx loops)
const chapters = _chapters.map((c, i) => Object.assign({id: 'chapter' + i, active: false}, c)),
      aside = _aside.map((c, i) => Object.assign({id: 'chapter' + i, active: false}, c));

render(
    <VideoDemo chapters={chapters} aside={aside} sources={sources} />,
    rootElement
);
