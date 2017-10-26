import React from 'react';
import NavBar from './NavBar';
import LogoHtml5 from './logos/html5';
import LogoCss3 from './logos/css3';
import LogoJs from './logos/js';
import LogoNode from './logos/node';
import LogoAutoCAD from './logos/acad';
import LogoReact from './logos/react';
import LogoMongo from './logos/mongo';
import LogoGit from './logos/git';
import LogoVsc from './logos/vsc';
import LogoAtom from './logos/atom';

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
  case 'frontEnd':
    graph = <div>
      <LogoHtml5 color={props.color} />
      <LogoCss3 color={props.color} />
      <LogoJs color={props.color} />
      <LogoReact color={props.color} />
    </div>;
    break;
  case 'backEnd':
    graph = <div>
      <LogoReact color={props.color} />
      <LogoReact color={props.color} />
      <LogoReact color={props.color} />
    </div>;
    break;
  case 'coding':
    graph = <div>
      <LogoReact color={props.color} />
      <LogoReact color={props.color} />
      <LogoReact color={props.color} />
    </div>;
    break;
  case 'react':
    graph = <div>
      <LogoReact color={props.color} />
      <LogoReact color={props.color} />
      <LogoReact color={props.color} />
    </div>;
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

// const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
// const loremS = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
// const loremXS = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const skillArray = [
  {
    skill: 'Front End development',
    text: 'My first page was a static site purely developed on HTML and CSS. Recently I started to learn about React and decided to fully rewrite my website to be able to update it from a JSON.',
    graph: 'frontEnd'
  },
  {
    skill: 'Back End development',
    text: 'I recently got involved in Node, Express and MongoDB to set basics of apps. I have also developed some small apps with SocketIO (see http://github...,)',
    graph: 'backEnd'
  },
  {
    skill: 'Programming',
    text: 'Git+GitHub+Yarn are my repository musts. For JavaScript development, I use Visual Studio Code with ESLint. I have created some unit tests with Mocha and Chia to test the logic behind this website. To produce markdown based reports and to develop with AutoLISP I tend to use atom as I created an AutoLISP language package for this editor.',
    graph: 'coding'
  },
  {
    skill: 'Effective communication',
    text: 'Ineffective communication is, unfortunately, more common than we\'d wish, and it wastes resources and wears relationships down. It\'s critical for me to be on the same page as my team/client. To this effect, I feel fluent and comfortable communicating my ideas effectively in spoken and written format, or even produce reports, charts, sketches, etc. to achieve a successful communication if needed.',
    graph: 'handshake'
  },
  {
    skill: 'Analytic problem solving',
    text: 'As an engineer, I prefer to approach the obstacles from an analytic perspective. I have successfully applied this in different fields problems such us chemistry research, construction consultancy projects or business decisions.',
    graph: 'Paper with a pie chart and a line chart'
  },
  {
    skill: 'UX/UI awareness',
    text: 'I have a strong UX awareness. It\'s not only about performance, it\'s about helping people to perform whatever task we want to execute in a much comfortable way and efficient way.',
    graph: 'a phone with a finger on the screen'
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
        <LogoAtom color={'white'} />
        <div className='flex-container'>
          <PresentSkills skillArray={skillArray} color={'white'}/>
          <PresentSkills skillArray={skillArray} color={'white'}/>
        </div>
      </div>
    );
  }
}

module.exports = Present;