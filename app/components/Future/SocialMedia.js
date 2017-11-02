import React from 'react';
import SocialMediaEntry from './SocialMediaEntry';

const SocialMedia = props => {
  return (
    <div className='futureSocialContainer'>
      {Object.values(props.socialMedia).map((entry, i) => {
        return <SocialMediaEntry imgName={entry.img} url={entry.url} key={i} />;
      })}
    </div>
  );
};

module.exports = SocialMedia;