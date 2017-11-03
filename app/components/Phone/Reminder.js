import React from 'react';

class Reminder extends React.Component {
  constructor(props){
    super(props);
    this.state = {open: true};
    this.handleOpen = this.handleOpen.bind(this);
  }
  handleOpen() {
    this.setState({open: false});
  }

  render() {
    if (this.state.open) {
      return(
        <div className='reminder' onClick={this.handleOpen}>
          <h1>Welcome!</h1>
          <p>Your device has a <b>small screen</b>.</p>
          <div className='diagram'>
            <div><i className="fa fa-mobile  fa-3x" aria-hidden="true"></i></div>
            <i className="fa fa-long-arrow-right fa-3x fadeOut" aria-hidden="true"></i>
            <div><i className="fa fa-desktop fa-4x" aria-hidden="true"></i></div>
          </div>
          <p>Is worth <b>checking</b> this site from a <b>bigger display</b>! ;)</p>
          <p>TAP TO CARRY ON</p>
        </div>
      );
    } else {
      return null;
    }
  }
}

module.exports = Reminder;