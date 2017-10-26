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
import LogoSocketio from './logos/socketio';
import LogoExpress from './logos/express';
import LogoUxUi from './logos/uxui';
import LogoUxUi2 from './logos/uxui2';

const PresentEntry = props => {
  return(
    <div className='presentEntryContainer'>
      <div className='presentTitle'>{props.title}</div>
      <div className='presentSubEntryContainer'>
        {
          props.entryArray.map((subEntry, i) => {
            return <PresentSubEntry subEntry={subEntry} key={i} color={props.color}/>;
          })
        }
      </div>
    </div>
  );
};

const PresentSubEntry = props => {
  let graph;
  switch (props.subEntry.graph) {
  case 'frontEnd':
    graph = <div className='presentSubEntryGraph'>
      <div className='pack'>
        <LogoJs color={props.color} />
        <LogoHtml5 color={props.color} />
      </div>
      <div className='pack'>
        <LogoCss3 color={props.color} />
        <LogoReact color={props.color} />
      </div>
    </div>;
    break;
  case 'backEnd':
    graph = <div className='presentSubEntryGraph'>
      <div className='pack'>
        <LogoNode color={props.color} />
        <LogoExpress color={props.color} />
      </div>
      <div className='pack'>
        <LogoMongo color={props.color} />
        <LogoSocketio color={props.color} />
      </div>
    </div>;
    break;
  case 'coding':
    graph = <div className='presentSubEntryGraph'>
      <div className='pack'>
        <LogoGit color={props.color} />
        <LogoAtom color={props.color} />
      </div>
      <div className='pack'>
        <LogoVsc color={props.color} />
        <LogoAutoCAD color={props.color} />
      </div>
    </div>;
    break;
  case 'uxui':
    graph = <div className='presentSubEntryGraph'>
      <LogoUxUi color={props.color} />
      <LogoUxUi2 color={props.color} />
    </div>;
    break;
  default:
    graph = props.subEntry.graph;
    break;
  }
  return(
    <div className='presentSubEntry'>
      {graph}
      <div className='presentSubEntryTitle'>{props.subEntry.title}</div>
      <div className='presentSubEntryText'>{props.subEntry.text}</div>
      {
        props.subEntry.hasOwnProperty('link')
          ? <a href={props.subEntry.link.url} target='_blank'>{props.subEntry.link.alt}</a>
          : null
      }
    </div>
  );
};

// const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
// const loremS = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
// const loremXS = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const skillArray = [
  {
    title: 'Front End development',
    text: 'My first page was a static site purely developed on HTML and CSS. Recently I started to learn about React and decided to fully rewrite my website to be able to update it from a JSON.',
    graph: 'frontEnd'
  },
  {
    title: 'Back End development',
    text: 'I recently got involved in Node, Express and MongoDB to set basics of apps. I have also developed some small apps with SocketIO (see http://github...,)',
    graph: 'backEnd'
  },
  {
    title: 'Programming',
    text: 'Git+GitHub+Yarn are my repository musts. For JavaScript development, I use Visual Studio Code with ESLint. I have created some unit tests with Mocha and Chia to test the logic behind this website. To produce markdown based reports and to develop with AutoLISP I tend to use atom as I created an AutoLISP language package for this editor.',
    graph: 'coding'
  },
  {
    title: 'Effective communication',
    text: 'Ineffective communication is, unfortunately, more common than we\'d wish, and it wastes resources and wears relationships down. It\'s critical for me to be on the same page as my team/client. To this effect, I feel fluent and comfortable communicating my ideas effectively in spoken and written format, or even produce reports, charts, sketches, etc. to achieve a successful communication if needed.',
    graph: 'handshake'
  },
  {
    title: 'Analytic problem solving',
    text: 'As an engineer, I prefer to approach the obstacles from an analytic perspective. I have successfully applied this in different fields problems such us chemistry research, construction consultancy projects or business decisions.',
    graph: 'Paper with a pie chart and a line chart'
  },
  {
    title: 'UX/UI awareness',
    text: 'I have a strong UX awareness. It\'s not only about performance, it\'s about helping people to perform whatever task we want to execute in a much comfortable way and efficient way.',
    graph: 'uxui'
  }
];
const portfolioArray = [
  {
    link: {
      url: 'https://github.io/dtgoitia...',
      alt: 'GitHub Repository'
    },
    title: 'davidtorralba.com',
    text: 'Personal static site built with HTML, CSS and React. The previous version was purelly HTML and CSS.',
    graph: 'davidtorralba'
  },
  {
    link: {
      url: 'https://github.io/dtgoitia...',
      alt: 'Check my repos'
    },
    title: 'davidtorralba.com',
    text: 'Personal static site built with HTML, CSS and React. The previous version was purelly HTML and CSS.',
    graph: 'davidtorralba'
  }
];
const interestsArray = [
  {
    type: 'interest',
    title: 'davidtorralba.com',
    text: 'Personal static site built with HTML, CSS and React. The previous version was purelly HTML and CSS.',
    graph: 'davidtorralba'
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
        <div className='present'>
          <PresentEntry title='PORTFOLIO' entryArray={portfolioArray} color={'white'}/>
          <PresentEntry title='SKILLS'    entryArray={skillArray}     color={'white'}/>
          <PresentEntry title='INTERESTS' entryArray={interestsArray} color={'white'}/>
        </div>
      </div>
    );
  }
}

module.exports = Present;