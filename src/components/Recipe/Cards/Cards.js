import React from 'react';
import Card from '../Card';

import './Cards.css';

export default function Cards() {
    return (
        <div className="row">
            <div className="col-md-4">
            <Card />
            </div>
            <div className="col-md-4">
            <Card />
            </div>
            <div className="col-md-4">
            <Card />
            </div>
            <div className="col-md-4">
            <Card />
            </div>
        </div>
    )
}
