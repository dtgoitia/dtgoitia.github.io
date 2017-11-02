import React from 'react';
import MultipleBar from './MultipleBar';

class MultipleBars extends React.Component {
  render() {
    return(
      <MultipleBar
        data={this.props.barData}
        barFormat={this.props.barFormat}
        className={this.props.className}
        stackDirection={this.props.stackDirection}
      />
    );
  }
}

module.exports = MultipleBars;