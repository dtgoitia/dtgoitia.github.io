import React from 'react';

import LogoHtml5 from './../logos/html5';
import LogoCss3 from './../logos/css3';
import LogoJs from './../logos/js';
import LogoNode from './../logos/node';
import LogoAutoCAD from './../logos/acad';
import LogoReact from './../logos/react';
import LogoMongo from './../logos/mongo';
import LogoGit from './../logos/git';
import LogoVsc from './../logos/vsc';
import LogoAtom from './../logos/atom';
import LogoSocketio from './../logos/socketio';
import LogoExpress from './../logos/express';
import LogoUxUi from './../logos/uxui';
import LogoUxUi2 from './../logos/uxui2';
import LogoDiscommunication from './../logos/discommunication';
import LogoAnalytic from './../logos/analytic';
import LogoIdea from './../logos/idea';
import LogoRelax from './../logos/relax';
import LogoFactory from './../logos/factory';
// import LogoFactory2 from './../logos/factory2';
import LogoDavidTorralba from './../logos/davidtorralba';
import LogoSearchBar from './../logos/searchbar';

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
  case 'backEndNoMongo':
    graph = <div className='presentSubEntryGraph'>
      <div className='pack'>
        <LogoNode color={props.color} />
        <LogoExpress color={props.color} />
      </div>
      <div className='pack'>
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
  case 'discommunication':
    graph = <div className='presentSubEntryGraph' id='discommunication'>
      <LogoDiscommunication color={props.color} />
    </div>;
    break;
  case 'uxui':
    graph = <div className='presentSubEntryGraph'>
      <LogoUxUi color={props.color} />
      <LogoUxUi2 color={props.color} />
    </div>;
    break;
  case 'analytic':
    graph = <div className='presentSubEntryGraph'>
      <LogoAnalytic color={props.color} />
      <LogoIdea color={props.color} />
    </div>;
    break;
  case 'interests':
    graph = <div className='presentSubEntryGraph big'>
      <LogoRelax color={props.color} />
    </div>;
    break;
  case 'davidtorralba':
    graph = <div className='presentSubEntryGraph big'>
      <LogoDavidTorralba color={props.color} />
    </div>;
    break;
  case 'factory':
    graph = <div className='presentSubEntryGraph big'>
      <LogoFactory color={props.color} />
    </div>;
    break;
  case 'civilAutolisp':
    graph = <div className='presentSubEntryGraph big'>
      <LogoAutoCAD color={props.color} />
    </div>;
    break;
  case 'searchbar':
    graph = <div className='presentSubEntryGraph big'>
      <LogoSearchBar color={props.color} />
    </div>;
    break;
  default:
    graph = props.subEntry.graph;
    break;
  }
  return(
    <div className='presentSubEntry'>
      {graph}
      {props.subEntry.hasOwnProperty('title')
        ? <div className='presentSubEntryTitle'>{props.subEntry.title}</div>
        : null
      }
      <div className='presentSubEntryText'>{props.subEntry.text}</div>
      {props.subEntry.hasOwnProperty('link')
        ? <a href={props.subEntry.link.url} target='_blank'>{props.subEntry.link.alt}</a>
        : null
      }
    </div>
  );
};

module.exports = PresentSubEntry;