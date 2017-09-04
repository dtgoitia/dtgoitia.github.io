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
    )
  }
}

class SvgMenuCenter extends React.Component {
  render () {
    return (
      <svg width="250" height="350">
        <path
          d="
            m 63 200
            v -170
            a 7.5 7.5 0 0 1 50 0
            v 170
            l 63 150
            h -176
          "
          fill="rgba(206,206,206,0.78)"
        />
      </svg>
    )
  }
}

class SvgMenuRight extends React.Component {
  render () {
    return (
      <svg width="265" height="350">
        <path
          d="
            m 0 200
            v -152
            a 7.5 7.5 0 0 1 50 0
            v 152
            l 215 150
            h -176
          "
          fill="rgba(255,255,255,0.78)"
        />
      </svg>
    )
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
    )
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
    )
  }
}

class Intro extends React.Component {
  render() {
    return (
      <div>
        <div className='nombre'>david
          <span className='apellido'>torralba</span>
        </div>
        <div className='web2'>
          { this.props.db.introSubtitle.filter( arr => arr[0] === this.props.st.language )[0][1]}
        </div>
        <SvgMenu changePage={this.props.changePage} />
      </div>
    )
  }
}


module.exports = Intro;