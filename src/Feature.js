import React from 'react';
import Option from './Option';

export default class Feature extends React.Component {
    getOptions = () => {
        return this.props.featuredItem.map((item, index) => {
            const selectedClass = item.name === this.props.selectedItem.name ? 'feature__selected' : '';
            const featureClass = 'feature__option ' + selectedClass;
            return <Option key={index} label={this.props.label} item={item} featureClass={featureClass} updateFeature={this.props.updateFeature}/>
        });
    }
    render() {
        return (
            <div className="feature" key={this.props.label}>
              <div className="feature__name">{this.props.label}</div>
              <ul className="feature__list">
                {this.getOptions()}
              </ul>
            </div>
        );
    }
}