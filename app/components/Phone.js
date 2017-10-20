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

const NutshellItem = props => {
  return <p className='nutshellItem'>{props.text}</p>;
};

const Nutshell = props => {
  return (
    <div className='nutshell'>
      <h1>In a Nutshell</h1>
      {
        props.nutshell.map((itemText, i) => {
          return <NutshellItem text={itemText} key={i} />;
        })
      }
      <div className='nutshellItemBottom'></div>
    </div>
  );
};

class Phone extends React.Component {
  render() {
    const info = this.props.originalDb.personalInfo;
    return(
      <div className='smallView'>
        <h1>Hold on!</h1>
        <p>It looks like your <b>screen</b> is too <b>small</b>.</p>
        <p>Check me from a bigger screen!</p>
        <Data label={'Name'} data={info.name} />
        <Data label={'Surnames'} data={info.surnames} />
        <Data label={'Email'} data={info.email} />
        <Data label={'Phone'} data={info.phone} />
        <Nutshell nutshell={this.props.originalDb.nutshell} />
        <AndroidButton email={info.email} />
      </div>
    )
  }
}

module.exports = Phone;