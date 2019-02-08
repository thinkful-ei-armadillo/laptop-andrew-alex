import React from "react";

export default class Option extends React.Component {
  render() {
    const featureClass = this.props.featureClass;
    return (
      <li className="feature__item">
        <div
          className={featureClass}
          onClick={e => this.props.updateFeature(this.props.label, this.props.item)}
        >
          {this.props.item.name}(
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
          }).format(this.props.item.cost)}
          )
        </div>
      </li>
    );
  }
}
