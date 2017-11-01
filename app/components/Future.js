import React from 'react';
import NavBar from './NavBar';

// const SocialMedia = () => {
//   return (
//     <div className='f08'>
//       <div className='f15'>
//         <img src='./../img/future_fb.png' />
//         <div className='f16'><a href='https://www.facebook.com/dtgoitia' target='_blank'><img src='./../img/future_fb1.png' /></a></div>
//       </div>
//       <div className='f17'>
//         <img src='./../img/future_in.png' />
//         <div className='f18'><a href='https://www.linkedin.com/in/dtgoitia' target='_blank'><img src='./../img/future_fb1.png' /></a></div>
//       </div>
//     </div>
//   );
// };

const SocialFacebook = () => {
  return (
    <svg viewBox='0 0 100 100'>
      <path fill='white' stroke='white' d='M 0,0 h100 l-50,50z' />
    </svg>
  );
};

const SocialMedia = () => {
  return (
    <div className='futureSocialContainer'>
      <SocialFacebook />
      <SocialFacebook />
      <SocialFacebook />
    </div>
  );
};

class Future extends React.Component {
  render () {
    const info = this.props.originalDb.personalInfo;
    console.log(info);
    return (
      <div>
        <NavBar
          left={{label:'MY PRESENT',target:'present'}}
          right={{label:'MY PAST',target:'past'}}
          changePage={this.props.changePage}
        />
        <div className='future_main'>
          <div className='future_submain'>
            <img src='./../img/future_photo.svg' />
          </div>
          <div className='future_submain'>
            <div className='f01'>
              <div className='f09'>PERSONAL<span className='f10'>DATA</span></div>
              <div className='f11'></div>
            </div>
            <div className='f02'>
              <img src='./../img/future_name.png' />
              <div className='f12'>name<span className='f13'>surnames</span></div>
              <div className='f14'>{info.name + ' ' + info.surnames}</div>
            </div>
            <div className='f03'>
              <img src='./../img/future_phone.png' />
              <div className='f12'>phone numer</div>
              <div className='f14'>{info.phone}</div>
            </div>
            <div className='f04'>
              <img src='./../img/future_mail.png' />
              <div className='f12'>e-mail adress</div>
              <div className='f14'><a href={'mailto:' + info.email}>{info.email}</a></div>
            </div>
            <div className='f05'>
              <img src='./../img/future_map.png'/>
              <div className='f12'>current location</div>
              <div className='f14'>
                <a href='https://www.google.co.uk/maps/place/Oxford/'>{info.location[1][1]}</a>
              </div>
            </div>
            <div className='f06'>
              <img src='./../img/future_QR_mini.png' />
              <div className='QR'>
                <img src='./../img/future_QR.svg' />
              </div>
            </div>
            <div className='f07'>
              <div className='f09'>SOCIAL<span className='f10'>MEDIA</span></div>
              <div className='f11'></div>
            </div>
            <SocialMedia />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Future;