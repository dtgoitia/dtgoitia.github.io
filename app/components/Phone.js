import React from 'react';

class Phone extends React.Component {
  render() {
    const db = this.props.db;
    return(
      <div className='smallView'>
        <h1>Hold on!</h1>
        <p>It looks like your <b>screen</b> is too <b>small</b>.</p>
        <p>Check me from a bigger screen!</p>
        <a href={'mailto:' + db.personalInfo.email}>{db.personalInfo.email}</a>
      </div>
    )
  }
}

module.exports = Phone;