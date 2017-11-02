import React from 'react';
import Tag from './Tag';

class Tags extends React.Component {
  render() {
    const h = this.props.h;
    return (
      <div className='tagsContainer' style={{position: 'absolute', bottom: (-h), height: h}} >
        {
          this.props.tagData.map((entry, i) => {
            const id = this.props.className + i;
            return(
              <Tag
                key={i}
                className={this.props.className}
                id={id}
                data={entry}
                referenceDate={this.props.referenceDate}
                barFormat={this.props.barFormat}
                handleSelectedTag={this.props.handleSelectedTag}
                selectedTagId={this.props.selectedTagId}
                folded={this.props.selectedTagId === id ? false : true}
              />
            );
          })
        }
      </div>
    );
  }
}

module.exports = Tags;