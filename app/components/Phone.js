import React from 'react';

const Data = props => {
  return (
    <div className='data'>
      <h1>{props.label}</h1>
      {props.data}
    </div>
  );
};

const AndroidButton = props => {
  return (
    <a className='androidButton' href={'mailto:' + props.email + '&subject=What\'s up David!'}>
      <i className="fa fa-envelope"></i>
    </a>
  );
};

class Phone extends React.Component {
  render() {
    const info = this.props.originalDb.personalInfo;
    console.log('info:', info);
    return(
      <div className='smallView'>
        <h1>Hold on!</h1>
        <p>It looks like your <b>screen</b> is too <b>small</b>.</p>
        <p>Check me from a bigger screen!</p>
        <Data label={'Name'} data={info.name} />
        <Data label={'Surnames'} data={info.surnames} />
        <Data label={'Email'} data={info.email} />
        <Data label={'Phone'} data={info.phone} />
        <AndroidButton email={info.email} />
      </div>
    )
  }
}

module.exports = Phone;