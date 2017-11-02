import React from 'react';

class MultipleBar extends React.Component {
  render() {
    const data = this.props.data;
    if (data.length === 0) {
      // empty bar
      const totalLength = 0;
      const barThickness = this.props.barFormat.barThickness;
      const spacing = this.props.barFormat.barSpacing;
      return (
        <svg
          className={this.props.className}
          viewBox={'0 0 '+ totalLength +' ' + barThickness}
          width={totalLength}
          height={barThickness + spacing}
        >
          <path></path>
        </svg>
      );
    } else {
      const totalLength = data.map( barData => barData.bar)
        .reduce((accumulatedLength, currentLength) => accumulatedLength + currentLength);
      const barThickness = this.props.barFormat.barThickness;
      const spacing = this.props.barFormat.barSpacing;
      let initialX = 0.5 * barThickness;

      let dataSorted;
      if (this.props.stackDirection === 'right') {
        dataSorted = Object.assign([], data).reverse();
      } else if (this.props.stackDirection === 'left') {
        dataSorted = Object.assign([], data);
      }
      return (
        <svg
          className={this.props.className}
          viewBox={'0 0 '+ totalLength +' ' + barThickness}
          width={totalLength}
          height={barThickness + spacing} // Total SVG height = half-spacing + barThickness + half spacing
        >
          { 
            dataSorted.map( (barData,i) => {
              
              const subTotalLength = barData.bar;
              let bar = subTotalLength - barThickness; // Total length - (round corners' X displacement)
              if (bar < 0) {
                console.log('barData.bar is too small (see <MultipleBar/>) and its value it\'s been overwritten by default length which need to match with bar width (barThickness = ' + barThickness + ', set by user)\nbarData:', barData);
                bar = 0;
              }
              const dString =
                'm ' + initialX + ' 0' +
                'h '+ bar +
                'a ' + 0.5 * barThickness + ' ' + 0.5 * barThickness + ' 0 0 1 0 ' + barThickness +
                'h -'+ bar +
                'a ' + 0.5 * barThickness + ' ' + 0.5 * barThickness + ' 0 0 1 0 ' + (-1 * barThickness);
              initialX += subTotalLength;
              return(
                <path
                  d={dString}
                  fill={barData.color ? barData.color : 'fill'}
                  key={i}
                />
              );
            })
          }
        </svg>
      );
    }
  }
}

module.exports = MultipleBar;