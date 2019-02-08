import React from 'react';

export default class SummaryOption extends React.Component {
    render() {
        const label = this.props.label;
        const feature = this.props.feature;
        return (
            <div className="summary__option">
                <div className="summary__option__label">{label}  </div>
                <div className="summary__option__value">{feature.name}</div>
                <div className="summary__option__cost">
                { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(feature.cost) }
                </div>
            </div>
        );
    }
}