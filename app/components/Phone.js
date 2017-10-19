import React from 'react';

class AndroidButton extends React.Component {
  render() {
    console.log(this.props.email);
    return (
      <a className='androidButton' href={'mailto:' + this.props.email + '&subject=What\'s up David!'}>
        <i className="fa fa-envelope"></i>
      </a>
    );
  }
}

class Phone extends React.Component {
  render() {
    const db = this.props.originalDb;
    return(
      <div className='smallView'>
        <h1>Hold on!</h1>
        <p>It looks like your <b>screen</b> is too <b>small</b>.</p>
        <p>Check me from a bigger screen!</p>
        <a href={'mailto:' + db.personalInfo.email}>{db.personalInfo.email}</a>
        <AndroidButton email={db.personalInfo.email} />
      </div>
    )
  }
}

module.exports = Phone;