import React from 'react';
import ArrowClose from './ArrowClose';
import ArrowOpen from './ArrowOpen';
import Entries from './Entries';

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

module.exports = FoldingMenu;