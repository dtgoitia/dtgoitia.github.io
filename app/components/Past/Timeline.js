import React from 'react';
import TimelineHeader from './TimelineHeader';
import Years from './Years';
import VerticalBar from './VerticalBar';
import AcademiaAndExperience from './AcademiaAndExperience';

const pastEntry = require('./../../../utils/pastEntry.js');

class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTagId: ''
    };
    this.handleSelectedTag = this.handleSelectedTag.bind(this);
  }

  handleSelectedTag(tagId) {
    this.setState({
      selectedTagId: tagId
    });
  }

  render() {
    const barFormat = this.props.barFormat;
    const dbRange   = this.props.dbRange;
    const yearArray = pastEntry.getYearsArray(dbRange.latest.getFullYear(), pastEntry.yearRange(dbRange.earliest, dbRange.latest));
    const barTotalHeight = (6 * (barFormat.barThickness + barFormat.barSpacing) + barFormat.yearSpacing) * (yearArray.length + 1);
    return (
      <div className='timelineContainer' style={{height: barTotalHeight}}>
        <TimelineHeader />
        <Years
          yearArray={yearArray}
          yearHeight={6 * (barFormat.barThickness + barFormat.barSpacing) - barFormat.yearSpacing}
          barFormat={barFormat}
        />
        <VerticalBar
          totalHeight={barTotalHeight}
          barFormat={barFormat}
        />
        <AcademiaAndExperience
          yearArray={yearArray}
          academiaBars={this.props.academiaBars}
          experienceBars={this.props.experienceBars}
          referenceDate={dbRange.earliest}
          barFormat={barFormat}
          handleSelectedTag={this.handleSelectedTag}
          selectedTagId={this.state.selectedTagId}
          originalDb={this.props.originalDb}
        />
      </div>
    );
  }
}

module.exports = Timeline;