import React from 'react';
import SocialEntry from './SocialEntry';

const Social = props => {
  const dbKeys = Object.keys(props.db);
  return (
    <div className='social'>
      {
        Object.values(props.db).map((entry, i) => {
          return <SocialEntry key={i} socialMedia={dbKeys[i]} url={entry.url} />;
        })
      }
    </div>
  );
};

module.exports = Social;