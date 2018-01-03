import React from 'react';

class NavBarButton extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        {this.props.className === 'navBarLeft' ? '« ' : null }
        {this.props.data.label}
        {this.props.className === 'navBarRight' ? ' »' : null }
      </div>
    );
  }
}

module.exports = NavBarButton;