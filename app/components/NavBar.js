import React from 'react';

class NavBarButton extends React.Component {
  render() {
    return (
      <div
        className={this.props.className}
        onClick={this.props.changePage.bind(null, this.props.data.target)}
      >
        {this.props.className === 'navBarLeft' ? '« ' : null }
        {this.props.data.label}
        {this.props.className === 'navBarRight' ? ' »' : null }
      </div>
    );
  }
}

class NavBar extends React.Component {
  render() {
    return (
      <div className="navBar">
        <NavBarButton
          className='navBarLeft'
          data={this.props.left}
          changePage={this.props.changePage}
        />
        <NavBarButton
          className='navBarRight'
          data={this.props.right}
          changePage={this.props.changePage}
        />
      </div>
    );
  }
}

module.exports = NavBar;