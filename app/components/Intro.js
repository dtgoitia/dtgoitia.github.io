import React from 'react';

class MenuText extends React.Component {
  render() {
    return(
      <text
        className='verticalText'
        transform={'translate(' + this.props.translationCoordinates + ') rotate(-90 0,0)'}
        textAnchor='end'
        onClick={this.props.changePage.bind(null, this.props.targetPage)}
      >
        <tspan className='verticalTextHidden'>{this.props.words[0]}</tspan> {this.props.words[1]}
      </text>
    );
  }
}

class MenuLeft extends React.Component {
  render() {
    return(
      <g className='SvgMenu'>
        <MenuPathLeft changePage={this.props.changePage} targetPage='past' />
        <MenuText
          words={this.props.words}
          changePage={this.props.changePage}
          targetPage='past'
          translationCoordinates={this.props.translationCoordinates}
        />
      </g>
    );
  }
}

class MenuCenter extends React.Component {
  render() {
    return(
      <g className='SvgMenu'>
        <MenuPathCenter changePage={this.props.changePage} targetPage='present' />
        <MenuText
          words={this.props.words}
          changePage={this.props.changePage}
          targetPage='present'
          translationCoordinates={this.props.translationCoordinates}
        />
      </g>
    );
  }
}

class MenuRight extends React.Component {
  render() {
    return(
      <g className='SvgMenu'>
        <MenuPathRight changePage={this.props.changePage} targetPage='future' />
        <MenuText
          words={this.props.words}
          changePage={this.props.changePage}
          targetPage='future'
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
        onClick={this.props.changePage.bind(null, this.props.targetPage)}
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
        onClick={this.props.changePage.bind(null, this.props.targetPage)}
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
        onClick={this.props.changePage.bind(null, this.props.targetPage)}
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

class SvgMenu extends React.Component {
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
        <div className='introHeader'>
          <div className='myName'>david
            <span className='mySurname'>torralba</span>
          </div>
          <div className='web2'>
            { this.props.originalDb.introSubtitle.filter( arr => arr[0] === this.props.st.language )[0][1]}
          </div>
        </div>
        <SvgMenu changePage={this.props.changePage} />
      </div>
    );
  }
}

module.exports = Intro;