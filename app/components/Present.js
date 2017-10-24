import React from 'react';
import NavBar from './NavBar';
import LogoHtml5 from './logos/html5';
import LogoCss3 from './logos/css3';
import LogoJs from './logos/js';

const PresentSkills = props => {
  return(
    <div className='presentSkillContainer'>
      <div className='presentTitle'>Title!</div>
      {
        props.skillArray.map((skill, i) => {
          return <PresentSkill skill={skill} key={i}/>;
        })
      }
    </div>
    
  );
};

const PresentSkill = props => {
  return(
    <div className='presentEntry'>
      <div className='presentEntryTitle'>{props.skill.skill}</div>
      <div className='presentEntryText'>{props.skill.text}</div>
      <div className='presentEntryGraph'>{props.skill.graph}</div>
    </div>
  );
};

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const skillArray = [
  {
    skill: 'skill name!',
    text: lorem,
    graph: 'graphURL!!'
  },
  {
    skill: 'skill name!',
    text: lorem,
    graph: 'graphURL!!'
  },
  {
    skill: 'skill name!',
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
        <LogoHtml5 color={'white'} />
        <LogoCss3 color={'white'} />
        <LogoJs color={'white'} />
        <PresentSkills skillArray={skillArray} />
      </div>
    );
  }
}

module.exports = Present;