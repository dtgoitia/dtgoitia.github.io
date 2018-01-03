import React from 'react';
import { Link } from 'react-router-dom';

import NavBarButton from './NavBarButton';

class NavBar extends React.Component {
  render() {
    
    return (
      <div className="navBar">
        <Link to={this.props.left.target}>
          <NavBarButton
            className='navBarLeft'
            data={this.props.left}
          />
        </Link>
        <Link to={this.props.right.target}>
          <NavBarButton
            className='navBarRight'
            data={this.props.right}
          />
        </Link>
      </div>
    );
  }
}

module.exports = NavBar;