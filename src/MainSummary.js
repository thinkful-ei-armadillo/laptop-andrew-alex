import React from 'react';
import SummaryOption from './SummaryOption';

export default class MainSummary extends React.Component {
    summary = () => { 
        return Object.keys(this.props.selected)
                .map(key => <SummaryOption key={key} label={key} feature={this.props.selected[key]}/>)};

    total = () => { return Object.keys(this.props.selected)
        .reduce((acc, curr) => acc + this.props.selected[curr].cost, 0)
    };   

    render() {
        return (
            <section className="main__summary">
                <h3>NEW GREENLEAF 2018</h3>
                {this.summary()}
                <div className="summary__total">
                    <div className="summary__total__label">Your Price: </div>
                    <div className="summary__total__value">
                        { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                            .format(this.total()) }
                    </div>
                </div>
            </section>
        );
    }
}