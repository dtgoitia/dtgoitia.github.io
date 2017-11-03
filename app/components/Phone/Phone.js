import React from 'react';
import Reminder from './Reminder';
import Photo from './Photo';
import Social from './Social';
import FoldingMenu from './FoldingMenu';
import Nutshell from './Nutshell';
import AndroidButton from './AndroidButton';

class Phone extends React.Component {
  render() {
    const contactData = [
      [this.props.originalDb.personalInfo.name, 'Name'],
      [this.props.originalDb.personalInfo.surnames, 'Surnames'],
      [this.props.originalDb.personalInfo.email, 'Email'],
      [this.props.originalDb.personalInfo.phone, 'Phone'],
    ];
    const academiaData = this.props.originalDb.academia
      .filter(x => x.relevant)
      .map(x => [x.title, x.start + ' - ' + x.end]);
    const experienceData = this.props.originalDb.experience
      .filter(x => x.relevant)
      .map(x => [x.title, x.start + ' - ' + x.end]);
    return(
      <div className='smallView'>
        <Reminder />
        <Photo url={this.props.originalDb.personalInfo.photo}/>
        <Social db={this.props.originalDb.socialMedia}/>
        <FoldingMenu folded={true} header={'Contact'}    db={contactData}/>
        <FoldingMenu folded={true} header={'Academia'}   db={academiaData}/>
        <FoldingMenu folded={true} header={'Experience'} db={experienceData}/>
        <Nutshell folded={false} nutshell={this.props.originalDb.nutshell}/>
        <AndroidButton email={this.props.originalDb.personalInfo.email}/>
      </div>
    );
  }
}

module.exports = Phone;