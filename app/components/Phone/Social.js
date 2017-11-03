import React from 'react';
import SocialEntry from './SocialEntry';

const Social = props => {
  const dbKeys = Object.keys(props.db);
  return (
    <div className='social'>
      {
        Object.values(props.db).map((url, i) => {
          return <SocialEntry key={i} socialMedia={dbKeys[i]} url={url} />;
        })
      }
    </div>
  );
};

module.exports = Social;