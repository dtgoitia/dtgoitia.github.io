import React from 'react';
import NavBar from './../NavBar/NavBar';
import SocialMedia from './SocialMedia';

class Future extends React.Component {
  render () {
    const info = this.props.originalDb.personalInfo;
    return (
      <div>
        <NavBar
          left={{label:'MY PRESENT',target:'present'}}
          right={{label:'MY PAST',target:'past'}}
        />
        <div className='future_main'>
          <div className='future_submain'>
            <img src={require('./../../img/future_photo.svg')} />
          </div>
          <div className='future_submain'>
            <div className='f01'>
              <div className='f09'>PERSONAL<span className='f10'>DATA</span></div>
              <div className='f11'></div>
            </div>
            <div className='f02'>
              <img src={require('./../../img/future_name.png')} />
              <div className='f12'>name<span className='f13'>surnames</span></div>
              <div className='f14'>{info.name + ' ' + info.surnames}</div>
            </div>
            <div className='f03'>
              <img src={require('./../../img/future_phone.png')} />
              <div className='f12'>phone numer</div>
              <div className='f14'>{info.phone}</div>
            </div>
            <div className='f04'>
              <img src={require('./../../img/future_mail.png')} />
              <div className='f12'>e-mail adress</div>
              <div className='f14'><a href={'mailto:' + info.email}>{info.email}</a></div>
            </div>
            <div className='f05'>
              <img src={require('./../../img/future_map.png')}/>
              <div className='f12'>current location</div>
              <div className='f14'>
                <a href='https://www.google.co.uk/maps/place/Oxford/'>{info.location[1][1]}</a>
              </div>
            </div>
            <div className='f06'>
              <img src={require('./../../img/future_QR_mini.png')} />
              <div className='QR'>
                <img src={require('./../../img/future_QR.svg')} />
              </div>
            </div>
            <div className='f07'>
              <div className='f09'>SOCIAL<span className='f10'>MEDIA</span></div>
              <div className='f11'></div>
            </div>
            <SocialMedia socialMedia={this.props.originalDb.socialMedia} />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Future;