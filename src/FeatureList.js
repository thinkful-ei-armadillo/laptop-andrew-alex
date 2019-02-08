import React from 'react';
import Feature from './Feature'

export default class FeatureList extends React.Component{
    getFeatures = () => {
        Object.keys(this.props.features)
          .map(key => {
            return (
            <Feature key={key} label={key} selectedItem={this.props.selected[key]} featuredItem={this.props.features[key]} updateFeature={this.props.updateFeature}/>
            );
        });
    }
    
    render(){
        return (
            <div>
                {this.getFeatures()}
            </div>
        );
    }
}