import React from 'react';

const pastEntry = require('./../../../utils/pastEntry.js');

// Tag with a circle shape: when the user clicks on the tag,
// it will unfold and show more information
class Tag extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      foldedTray: this.props.folded
    };
    this.showHideTray = this.showHideTray.bind(this);
  }

  showHideTray(){
    this.setState({foldedTray: !this.state.foldedTray});
    if (this.state.foldedTray === false) {
      this.props.handleSelectedTag('');
    } else {
      this.props.handleSelectedTag(this.props.id);
    }
  }

  render() {
    const data = this.props.data;
    const endDate = (data.end === '' | data.end === 'not yet') ? new Date() : new Date(data.end + '-01');
    const endIndex = pastEntry.getRelativeIndex(this.props.referenceDate, endDate);
    const barHeight = this.props.barFormat.barThickness + this.props.barFormat.barSpacing;

    const className = this.props.className;
    const tagStyle = {
      bottom: ((endIndex * barHeight) - data.y) + 'px',
      zIndex: this.props.folded === true ? 1000 : 9000
    };
    className === 'academiaTag' ? tagStyle.left = data.x : tagStyle.right = data.x;
    
    return (
      <div className={className} style={tagStyle}>
        <div className={className + 'Container'}>
          <div
            className={
              this.props.folded === true
                ? className+'Closed'
                : className+'Closed '+className+'Open'
            }
            style={{backgroundColor: data.color}}
            onClick={this.showHideTray.bind(null)}
          >
            <img src={require('./../../img/' + data.img)} />
            <h1>{data.title}</h1>
            <h2>{data.subtitle}</h2>
            <div
              className='tagTray'
              style={{display: 'block'}}
            >
              <h3>{data.description}</h3>
              <p><i>Start date: </i>{data.start}</p>
              <p><i>End date: </i>{data.end}</p>
            </div>
          </div>  
        </div>
      </div>
    );
  }
}

module.exports = Tag;