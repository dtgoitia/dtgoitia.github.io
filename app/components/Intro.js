import React from 'react';

class SvgMenuLeft extends React.Component {
  render () {
    return (
      <svg width="265" height="350">
        <path
          d="m 215 200 v -145 a 7.5 7.5 0 0 1 50 0 v 145 l -89 150 h -176"
          fill="rgba(150,150,150,0.78)"
        />
      </svg>
    );
  }
}

class SvgMenuCenter extends React.Component {
  render () {
    return (
      <svg width="250" height="350">
        <path
          d={ 
            'm 63 200' +
            'v -170' +
            'a 7.5 7.5 0 0 1 50 0' +
            'v 170' +
            'l 63 150' +
            'h -176'
          }
          fill="rgba(206,206,206,0.78)"
        />
      </svg>
    );
  }
}

class SvgMenuRight extends React.Component {
  render () {
    return (
      <svg width="265" height="350">
        <path
          d={
            'm 0 200' + 
            'v -152' + 
            'a 7.5 7.5 0 0 1 50 0' + 
            'v 152' + 
            'l 215 150' + 
            'h -176'
          }
          fill="rgba(255,255,255,0.78)"
        />
      </svg>
    );
  }
}

class SvgMenu extends React.Component {
  render () {
    return (
      <div className='menu'>
        <div className='vertical1'>
          <SvgMenuLeft />
          <MenuVerticalText words={['my', 'past']} changePage={this.props.changePage}/>
        </div>
        <div className='vertical2'>
          <SvgMenuCenter />
          <MenuVerticalText words={['my', 'present']} changePage={this.props.changePage}/>
        </div>
        <div className='vertical3'>
          <SvgMenuRight />
          <MenuVerticalText words={['your', 'future']} changePage={this.props.changePage}/>
        </div>
      </div>
    );
  }
}

class MenuVerticalText extends React.Component {
  render () {
    return (
      <div className='caja_girada'>
        <span onClick={this.props.changePage.bind(null, this.props.words[1])}>
          <span className='texto_oculto'>{this.props.words[0]} </span>
          <span className='texto_fijo'>{this.props.words[1]}</span>
        </span>
      </div>
    );
  }
}

class MenuText extends React.Component {
  render() {
    return(
      <text
        className='verticalText'
        transform={'translate(' + this.props.translationCoordinates + ') rotate(-90 0,0)'}
        textAnchor='end'
      >
        <tspan className='verticalTextHidden'>{this.props.words[0]}</tspan> {this.props.words[1]}
      </text>
    );
  }
}

class MenuLeft extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    console.log(this.props.words.join(' '));
  }

  render() {
    return(
      <g className='SvgMenu'>
        <MenuPathLeft handleClick={this.handleClick}/>
        <MenuText words={this.props.words} onClick={this.handleClick}
          translationCoordinates={this.props.translationCoordinates}
        />
      </g>
    );
  }
}

class MenuCenter extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    console.log(this.props.words.join(' '));
  }

  render() {
    return(
      <g className='SvgMenu'>
        <MenuPathCenter handleClick={this.handleClick}/>
        <MenuText words={this.props.words} onClick={this.handleClick}
          translationCoordinates={this.props.translationCoordinates}
        />
      </g>
    );
  }
}

class MenuRight extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    console.log(this.props.words.join(' '));
  }

  render() {
    return(
      <g className='SvgMenu'>
        <MenuPathRight handleClick={this.handleClick}/>
        <MenuText words={this.props.words} onClick={this.handleClick}
          translationCoordinates={this.props.translationCoordinates}
        />
      </g>
    );
  }
}

class MenuPathLeft extends React.Component {
  render() {
    return(
      <path
        onClick={this.props.handleClick}
        d="m 215 200 v -145 a 7.5 7.5 0 0 1 50 0 v 145 l -89 150 h -176"
        fill="rgba(150,150,150,0.78)"
      />
    );
  }
}

class MenuPathCenter extends React.Component {
  render() {
    return(
      <path
        onClick={this.props.handleClick}
        d={ 
          'm 275 200' +
          'v -170' +
          'a 7.5 7.5 0 0 1 50 0' +
          'v 170' +
          'l 63 150' +
          'h -176'
        }
        fill="rgba(206,206,206,0.78)"
      />
    );
  }
}

class MenuPathRight extends React.Component {
  render() {
    return(
      <path
        onClick={this.props.handleClick}
        d={
          'm 335 200' + 
          'v -152' + 
          'a 7.5 7.5 0 0 1 50 0' + 
          'v 152' + 
          'l 215 150' + 
          'h -176'
        }
        fill="rgba(255,255,255,0.78)"
      />
    );
  }
}

class SvgMenuNew extends React.Component {
  render(){
    return(
      <div className='menu'>
        <svg width="600" height="350">
          <MenuLeft words={['my', 'past']}      changePage={this.props.changePage}
            translationCoordinates={'245 50'}
          />
          <MenuCenter words={['my', 'present']}   changePage={this.props.changePage}
            translationCoordinates={'306 25'}
          />
          <MenuRight words={['your', 'future']}  changePage={this.props.changePage}
            translationCoordinates={'367 40'}
          />
        </svg>
      </div>
    );
  }
}


class Intro extends React.Component {
  render() {
    return (
      <div>
        <div className='myName'>david
          <span className='mySurname'>torralba</span>
        </div>
        <div className='web2'>
          { this.props.originalDb.introSubtitle.filter( arr => arr[0] === this.props.st.language )[0][1]}
        </div>
        <SvgMenuNew changePage={this.props.changePage} />
      </div>
    );
  }
}


module.exports = Intro;