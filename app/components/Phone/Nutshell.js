import React from 'react';
import ArrowOpen from './ArrowOpen';
import ArrowClose from './ArrowClose';

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

module.exports = Nutshell;