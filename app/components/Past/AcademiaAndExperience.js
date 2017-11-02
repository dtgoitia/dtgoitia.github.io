import React from 'react';
import Bars from './Bars';
import Tags from './Tags';

class AcademiaAndExperience extends React.Component {
  render() {
    const barFormat = this.props.barFormat;
    
    // Get academiaTags div height from number of years ploted and bar size
    const h = (this.props.yearArray.length + 0) * 6 * (barFormat.barThickness + barFormat.barSpacing);
    return (
      <div className='timeline'>
        <div className='academia'>
          <Bars barsData={this.props.academiaBars}
            barFormat={barFormat}
            className='academiaBar'
            stackDirection='right'
          />
        </div>
        <div className='experience'>
          <Bars barsData={this.props.experienceBars}
            barFormat={barFormat}
            className='experienceBar'
            stackDirection='left'
          />
        </div>
        <div className='academia'>
          <Tags
            className='academiaTag'
            h={h}
            barFormat={barFormat}
            referenceDate={this.props.referenceDate}
            handleSelectedTag={this.props.handleSelectedTag}
            selectedTagId={this.props.selectedTagId}
            tagData={this.props.originalDb.academia}
          />
        </div>
        <div className='experience'>
          <Tags
            className='experienceTag'
            h={h}
            barFormat={barFormat}
            referenceDate={this.props.referenceDate}
            handleSelectedTag={this.props.handleSelectedTag}
            selectedTagId={this.props.selectedTagId}
            tagData={this.props.originalDb.experience}
          />
        </div>
      </div>
    );
  }
}

module.exports = AcademiaAndExperience;