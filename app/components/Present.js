import React from 'react';
import NavBar from './NavBar';
import LogoHtml5 from './logos/html5';
import LogoCss3 from './logos/css3';
import LogoJs from './logos/js';
import LogoNode from './logos/node';
import LogoAutoCAD from './logos/acad';
import LogoReact from './logos/react';

const PresentSkills = props => {
  return(
    <div className='presentSkillContainer'>
      <div className='presentTitle'>Title!</div>
      {
        props.skillArray.map((skill, i) => {
          return <PresentSkill skill={skill} key={i} color={props.color}/>;
        })
      }
    </div>
  );
};

const PresentSkill = props => {
  let graph;
  switch (props.skill.graph) {
  case 'react':
    graph = <LogoReact color={props.color} />;
    break;
  default:
    graph = props.skill.graph;
    break;
  }

  return(
    <div className='presentEntry'>
      <div className='presentEntryTitle'>{props.skill.skill}</div>
      <div className='presentEntryText'>{props.skill.text}</div>
      <div className='presentEntryGraph'>{graph}</div>
    </div>
  );
};

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const skillArray = [
  {
    skill: 'React',
    text: lorem,
    graph: 'react'
  },
  {
    skill: 'skill name!',
    text: lorem,
    graph: 'graphURL!!'
  },
  {
    skill: 'React',
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
        <PresentSkills skillArray={skillArray} color={'white'}/>
      </div>
    );
  }
}

module.exports = Present;