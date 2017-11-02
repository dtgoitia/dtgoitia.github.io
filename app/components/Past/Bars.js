import React from 'react';
import MultipleBars from './MultipleBars';

class Bars extends React.Component {
  render() {
    return (
      <div className='bars'>
        {Object.values(this.props.barsData).reverse().map((barData,i) => {
          return(
            <MultipleBars key={i}
              barData={barData}
              barFormat={this.props.barFormat}
              className={this.props.className}
              stackDirection={this.props.stackDirection}              
            />
          );
        })}
      </div>
    );
  }
}

module.exports = Bars;