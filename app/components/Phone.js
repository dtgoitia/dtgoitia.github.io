import React from 'react';

const AndroidButton = props => {
  return (
    <a className='androidButton' href={'mailto:' + props.email}>
      <i className="fa fa-envelope"></i>
    </a>
  );
};

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

const Photo = props => {
  return(
    <div className='photo'>
      <img src={'./../img/' + props.url} />
    </div>
  );
};

const Social = props => {
  const dbKeys = Object.keys(props.db);
  return (
    <div className='social'>
      {
        Object.values(props.db).map((entryData, i) => {
          return <SocialEntry key={i} socialMedia={dbKeys[i]} url={entryData.url} />;
        })
      }
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

const Entry = props => {
  return(
    <div className='tabEntry'>
      <div className='entryHead'>{props.head}</div>
      <div className='entrySub'>{props.sub}</div>
    </div>
  );
};

const Entries = props => {
  return(
    <div className='tab'>
      {props.db.map((entry, i) => {
        return <Entry head={entry[0]} sub={entry[1]}  key={i} />;
      })}
    </div>
  );
};

const ArrowOpen = () => {
  const dString = 'm 20 10 l20 20 l-20 20';
  return(
    <svg className='arrowOpen' viewBox={'0 0 60 60'}>
      <path d={dString} fill='none' strokeWidth='10'/>
    </svg>
  );
};

const ArrowClose = () => {
  const dString = 'm 10 20 l20 20 l20 -20';
  return(
    <svg className='arrowClose' viewBox={'0 0 60 60'}>
      <path d={dString} fill='none' strokeWidth='10'/>
    </svg>
  );
};

class FoldingMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { folded: this.props.folded };
    this.handleFolding = this.handleFolding.bind(this);
  }

  handleFolding(){
    this.setState({folded: !this.state.folded});
  }

  render() {
    return(
      <div className='foldingTab'>
        <div className='headerContainer'>
          {this.state.folded ? <ArrowOpen/> : <ArrowClose/>}
          <div className='header' onClick={this.handleFolding}>{this.props.header}</div>
        </div>
        {this.state.folded ? null : <Entries db={this.props.db}/>}
      </div>
    );
  }
}

const NutshellItem = props => <div className='pa'>{props.text}</div>;

class Nutshell extends React.Component {
  constructor(props) {
    super(props);
    this.state = { folded: this.props.folded };
    this.handleFolding = this.handleFolding.bind(this);
  }

  handleFolding(){
    this.setState({folded: !this.state.folded});
  }

  render() {
    return(
      <div className='foldingTab'>
        <div className='headerContainer'>
          {this.state.folded ? <ArrowOpen/> : <ArrowClose/>}
          <div className='header' onClick={this.handleFolding}>In a Nutshell</div>
        </div>
        <div className='tab' style={this.state.folded ? {display: 'none'} : {display: 'block'}}>
          {this.props.nutshell.map((entry, i) => <NutshellItem text={entry.text} key={i} />)}
        </div>
      </div>
    );
  }
}

class Phone extends React.Component {
  render() {
    const contactData = [
      [this.props.originalDb.personalInfo.name, 'Name'],
      [this.props.originalDb.personalInfo.surnames, 'Surnames'],
      [this.props.originalDb.personalInfo.email, 'Email'],
      [this.props.originalDb.personalInfo.phone, 'Phone'],
    ];
    const academiaData = this.props.originalDb.academia
      .filter(x => x.relevant)
      .map(x => [x.title, x.start + ' - ' + x.end]);
    const experienceData = this.props.originalDb.experience
      .filter(x => x.relevant)
      .map(x => [x.title, x.start + ' - ' + x.end]);
    return(
      <div className='smallView'>
        <Reminder />
        <Photo url={this.props.originalDb.personalInfo.photo}/>
        <Social db={this.props.originalDb.socialMedia}/>
        <FoldingMenu folded={true} header={'Contact'}    db={contactData}/>
        <FoldingMenu folded={true} header={'Academia'}   db={academiaData}/>
        <FoldingMenu folded={true} header={'Experience'} db={experienceData}/>
        <Nutshell folded={false} nutshell={this.props.originalDb.nutshell}/>
        <AndroidButton email={this.props.originalDb.personalInfo.email}/>
      </div>
    );
  }
}

module.exports = Phone;