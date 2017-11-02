import React from 'react';

class Year extends React.Component {
  render() {
    return (
      <div
        className='year'
        style={{
          height: this.props.yearHeight + 'px',
          margin: this.props.barFormat.yearSpacing + 'px 0px '
        }}
      >
        <div className='yearTag'>{this.props.year}</div>
      </div>
    );
  }
}

module.exports = Year;