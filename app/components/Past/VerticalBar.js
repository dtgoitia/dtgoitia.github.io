import React from 'react';

class VerticalBar extends React.Component {
  render() {
    const totalHeight = this.props.totalHeight;
    const barThickness = 0.6 * this.props.barFormat.barSpacing;
    const spacing = this.props.barFormat.yearSpacing;
    const dString=
      'M' + spacing + ' ' + (0.5 * barThickness) +
      'a ' + 0.5 * barThickness + ' ' + 0.5 * barThickness + ' 0 0 1 ' + barThickness + ' 0' +
      'v' + (totalHeight - barThickness) +
      'a ' + 0.5 * barThickness + ' ' + 0.5 * barThickness + ' 0 0 1 ' + (-barThickness) + ' 0' +
      'v' + -(totalHeight - barThickness)
      ;
    // console.log(spacing);
    return(
      <div className='verticalBar'>
        <svg
          viewBox={'0 0 '+ (spacing + barThickness + spacing) +' ' + totalHeight}
          width={spacing + barThickness + spacing}
          height={totalHeight}
        >
          <path d={dString}/>
        </svg>
      </div>
    );
  }
}

module.exports = VerticalBar;