import React from 'react';
import Year from './Year';

class Years extends React.Component {
  render() {
    return (
      <div className='years'>
        {
          this.props.yearArray.map( year => {
            return (
              <Year
                key={year}
                year={year}
                yearHeight={this.props.yearHeight}
                barFormat={this.props.barFormat}
              />
            );
          })
        }
      </div>
    );
  }
}

module.exports = Years;