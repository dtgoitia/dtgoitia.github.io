import React from 'react';
import NavBar from './NavBar';

const PresentEntryGraph = props => {
  return <div className='presentEntryGraph'>{props.graph}</div>;
};

const PresentEntryText = props => {
  return <div className='presentEntryText'>{props.text}</div>;
};

const PresentEntry = props => {
  return(
    <div className='presentEntry'>
      <PresentEntryGraph graph={props.content.graph} />
      <PresentEntryText text={props.content.text}/>
    </div>
  );
};

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const contentArray = [
  {
    text: lorem,
    graph: 'graphURL!!'
  },
  {
    text: lorem,
    graph: 'graphURL!!'
  },
  {
    text: lorem,
    graph: 'graphURL!!'
  }
];

class Present extends React.Component {
  render () {
    return (
      <div>
        <NavBar
          left={{label:'MY PAST',target:'past'}}
          right={{label:'YOUR FUTURE',target:'future'}}
          changePage={this.props.changePage}
        />
        <div className='presentEntryContainer'>
          {contentArray.map((content, i) => {
            return <PresentEntry content={content} key={i}/>;
          })}
        </div>
      </div>
    );
  }
}

module.exports = Present;