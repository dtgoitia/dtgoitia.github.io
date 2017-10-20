import React from 'react';

const AndroidButton = props => {
  return (
    <a className='androidButton' href={'mailto:' + props.email}>
      <i className="fa fa-envelope"></i>
    </a>
  );
};

const NutshellItem = props => {
  return <p className='nutshellItem'>{props.text}</p>;
};

class Nutshell extends React.Component {
  constructor(props) {
    super(props);
    this.state = { folded: true };
    this.handleFolding = this.handleFolding.bind(this);
  }

  handleFolding(){
    this.setState({folded: !this.state.folded});
  }

  render() {
    return(
      <div className='foldingMenu'>
        <div className='header'>
          <i className={'fa fa-chevron-' + (this.state.folded ? 'right' : 'down')} aria-hidden='true'></i>
          <h2 onClick={this.handleFolding}>In a Nutshell</h2>
        </div>
        <div className='entryContainer'>
          {
            this.state.folded
              ? null
              : this.props.nutshell.map((itemText, i) => <NutshellItem text={itemText} key={i} />)
          }
        </div>
      </div>
    );
  }
}

class FoldingMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { folded: true };
    this.handleFolding = this.handleFolding.bind(this);
  }

  handleFolding(){
    this.setState({folded: !this.state.folded});
  }

  render() {
    return(
      <div className='foldingMenu'>
        <div className='header'>
          <i className={'fa fa-chevron-' + (this.state.folded ? 'right' : 'down')} aria-hidden='true'></i>
          <h2 onClick={this.handleFolding}>{this.props.menuTitle}</h2>
        </div>
        <div className='entryContainer'>
          {
            this.state.folded
              ? null
              : this.props.db.map((entry, i) => {
                if (entry.relevant === true) {
                  return <FoldingMenuEntry entry={entry} key={i} />;
                } else {
                  return null;
                }
                
              })
          }
        </div>
      </div>
    );
  }
}

const FoldingMenuEntry = props => {
  return(
    <div className='entry'>
      <div>{props.entry.title}</div>
      <span>{props.entry.start} - {props.entry.end}</span>
    </div>
  );
};

const SocialEntry = props => {
  return(
    <div>
      <a href={props.url}>
        <i className={'fa fa-' + props.socialMedia + ' fa-4x'}></i>
      </a>
    </div>
  );
};

const Social = props => {
  const dbKeys = Object.keys(props.db);
  return (
    <div className='social'>
      {
        Object.values(props.db).map((url, i) => {
          return <SocialEntry key={i} socialMedia={dbKeys[i]} url={url} />;
        })
      }
    </div>
  );
};

class PersonalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { folded: false };
    this.handleFolding = this.handleFolding.bind(this);
  }

  handleFolding(){
    this.setState({folded: !this.state.folded});
  }

  render() {
    return(
      <div className='foldingMenu'>
        <div className='header'>
          <i className={'fa fa-chevron-' + (this.state.folded ? 'right' : 'down')} aria-hidden='true'></i>
          <h2 onClick={this.handleFolding}>{this.props.menuTitle}</h2>
        </div>
        <div className='entryContainer' style={this.state.folded ? {display: 'none'} : {display: 'block'}}>
          <Data label={'Name'} data={this.props.info.name} />
          <Data label={'Surnames'} data={this.props.info.surnames} />
          <Data label={'Email'} data={this.props.info.email} />
          <Data label={'Phone'} data={this.props.info.phone} />
        </div>
      </div>
    );
  }
}

const Photo = props => {
  return(
    <div className='photo'>
      <img src={'./../img/' + props.url} />
    </div>
  );
};

class Reminder extends React.Component {
  constructor(props){
    super(props);
    this.state = {open: true};
    // this.state = {open: false};
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
          <p>Is worth to <b>check</b> this site from a <b>bigger display</b>! ;)</p>
          <p>TAP TO CARRY ON</p>
        </div>
      );
    } else {
      return null;
    }
  }
}

const Data = props => {
  return (
    <div className='data'>
      <h1>{props.label}</h1>
      {props.data}
    </div>
  );
};

class Phone extends React.Component {
  render() {
    return(
      <div className='smallView yui3-cssreset'>
        <Reminder />
        <Photo url={this.props.originalDb.personalInfo.photo} />
        <Social db={this.props.originalDb.socialMedia}/>
        <PersonalInfo menuTitle={'Contact'} info={this.props.originalDb.personalInfo} />
        <FoldingMenu menuTitle={'Academia'} db={this.props.originalDb.academia} />
        <FoldingMenu menuTitle={'Experience'} db={this.props.originalDb.experience} />
        <Nutshell nutshell={this.props.originalDb.nutshell} />
        <AndroidButton email={this.props.originalDb.personalInfo.email} />
      </div>
    );
  }
}

module.exports = Phone;