import React from 'react';

const SocialMediaEntry = props => {
  return (
    <div className='futureSocialEntry'>
      <img src={require('./../../img/future_social.png')} />
      <img className='symbol' src={require('./../../img/'+props.imgName+'.svg')} />
      <a href={props.url} target='_blank'>
        <img src={require('./../../img/future_peri.png')} />
      </a>
    </div>
  );
};

module.exports = SocialMediaEntry;