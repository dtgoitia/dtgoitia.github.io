import React from 'react';

const TimelineHeader = () => {
  return (
    <div className='timelineHeader'>
      <div className='timelineH1'>LIFE TIMELINE</div>
      <div className='timelineHeaderFlex'>
        <div id='timelineHeaderLeft'  className='timelineH2'>ACADEMIA</div>
        <div id='timelineHeaderRight' className='timelineH2'>EXPERIENCE</div>
      </div>
    </div>
  );
};

module.exports = TimelineHeader;